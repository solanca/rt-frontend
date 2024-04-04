import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
const App: React.FC = () => {
  return (
    <Suspense fallback={<div>...loading</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
