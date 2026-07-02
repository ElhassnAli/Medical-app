import { createBrowserRouter } from "react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import HomePage from "./Home/HomePage";
import ProductsPage from "./Products/ProductsPage";
import MaintenancePage from "./Maintenance/MaintenancePage";
import BlogPage from "./Blog/BlogPage";
import MainLayout from "./components/MainLayout";
import ContactPage from "./Contact/ContactPage";
import AboutUsPage from "./About Us/AboutUsPage";
import GalleryPage from "./Gallery/GalleryPage";
import { RouterProvider } from "react-router/dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/maintenance",
        element: <MaintenancePage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="bg-[#faf8fe] text-[#05010b] min:h-screen">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
