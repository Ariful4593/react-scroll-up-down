import React from "react";
import { Routes, Route } from "react-router-dom";

const ReactAuthSystem = ({
  urls = {},
  permissionList = [],
  loginPath = "/login",
  guestRouteComponent,
  loginComponent,
  protectedRouteComponent,
  masterLayoutComponent,
  unAuthorizedComponent,
  notFoundComponent,
}) => {
  if (Object.keys(urls).length === 0) return null;

  if (!guestRouteComponent) return null;
  if (!loginComponent) return null;
  if (!protectedRouteComponent) return null;
  if (!masterLayoutComponent) return null;
  if (!unAuthorizedComponent) return null;
  if (!notFoundComponent) return null;
  
  return (
    <Routes>
      <Route element={guestRouteComponent}>
        <Route path={loginPath} element={loginComponent} />
      </Route>

      <Route element={protectedRouteComponent}>
        <Route element={masterLayoutComponent}>
          {Object.values(urls).map((r, key) => {
            return (
              <Route
                key={key}
                exact
                path={r.url}
                element={
                  r.permission
                    ? permissionList?.includes(r.permission)
                      ? r.component
                      : unAuthorizedComponent
                    : r.component
                }
              />
            );
          })}
        </Route>
      </Route>

      <Route path="*" element={notFoundComponent} />
    </Routes>
  );
};

export default ReactAuthSystem;
