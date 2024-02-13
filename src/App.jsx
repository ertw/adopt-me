import React, { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createRootRoute,
  createRoute,
  createRouter,
  Link,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SearchParams from "./SearchParams.jsx";
import { StrictMode } from "react";
import Details from "./Details.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const rootRoute = createRootRoute({
  component: () => (
    <div>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Outlet />
        <TanStackRouterDevtools />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    return <SearchParams />;
  },
});

const detailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/details/$id",
  component: function About() {
    return <Details />;
  },
});

const routeTree = rootRoute.addChildren([indexRoute, detailsRoute]);

const router = createRouter({ routeTree });

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
