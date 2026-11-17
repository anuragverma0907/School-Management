import React, { createContext, useContext, useState, useEffect } from "react";

const RouterContext = createContext({
  path: "/",
  navigate: () => {},
});

export function BrowserRouter({ children }) {
  const [path, setPath] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };

    const handleCustomNavigate = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("app_navigate", handleCustomNavigate);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("app_navigate", handleCustomNavigate);
    };
  }, []);

  const navigate = (to, options = {}) => {
    if (typeof window !== "undefined") {
      if (options.replace) {
        window.history.replaceState({}, "", to);
      } else {
        window.history.pushState({}, "", to);
      }
      setPath(to);
      window.dispatchEvent(new Event("app_navigate"));
    }
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useNavigate() {
  const { navigate } = useContext(RouterContext);
  return navigate;
}

export function useLocation() {
  const { path } = useContext(RouterContext);
  return { pathname: path };
}

export function Routes({ children }) {
  const { path } = useContext(RouterContext);
  const normalizedCurrent = path.toLowerCase().replace(/\/+$/, "") || "/";

  let matchedElement = null;
  let fallbackElement = null;

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    const { path: routePath, element } = child.props;
    if (!routePath) return;

    const normalizedRoute = routePath.toLowerCase().replace(/\/+$/, "") || "/";

    if (routePath === "*") {
      fallbackElement = element;
    } else if (normalizedRoute === normalizedCurrent) {
      if (!matchedElement) {
        matchedElement = element;
      }
    }
  });

  return matchedElement || fallbackElement || null;
}

export function Route({ element }) {
  return element;
}

export function Navigate({ to, replace = true }) {
  const { navigate } = useContext(RouterContext);

  useEffect(() => {
    navigate(to, { replace });
  }, [to, replace, navigate]);

  return null;
}

export function Link({ to, children, className = "", onClick, ...props }) {
  const { navigate } = useContext(RouterContext);

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (
      !e.defaultPrevented &&
      e.button === 0 &&
      !e.metaKey &&
      !e.ctrlKey &&
      !e.altKey &&
      !e.shiftKey &&
      to.startsWith("/")
    ) {
      e.preventDefault();
      navigate(to);
    }
  };

  return (
    <a href={to} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

