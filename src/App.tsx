import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";

//ページのインポート
import Landing from "./views/LandingView";
import BlogList from "./views/BlogListView";
import BlogDetail from "./views/BlogDetailView";
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
        path: "blog",
        element: <BlogList />
      },
      {
        path: "blog/:slug",
        element: <BlogDetail />
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
