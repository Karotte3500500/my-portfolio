import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";

//ページのインポート
import Landing from "./views/LandingView"
import NotFound from "./views/NotFoundView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "",
        element: <Landing />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ] 
  },
]);


function App(): React.JSX.Element {
  return <RouterProvider router={router} />;
}

export default App
