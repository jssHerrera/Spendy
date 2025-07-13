import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import { SVGSprite } from "./styles";
import { AuthSync } from "./hooks";

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="h-dvh grid place-items-center bg-bg text-bg5">
            Cargando...
          </div>
        }
      >
        <AuthSync />
        <SVGSprite />
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
