import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import { SVGSprite } from "./styles";
import { AuthSync } from "./hooks";

function App() {
  return (
    <>
      <AuthSync />
      <SVGSprite />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
