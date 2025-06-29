import { RouterProvider } from "react-router-dom";
import { router, SVGSprite } from "./index";

function App() {
  return (
    <>
      <SVGSprite />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
