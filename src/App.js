import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import { ReactQueryDevtools } from "react-query/devtools"
// Pages
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import SearchPage from "./pages/SearchPage"
import CarsTypesPage from "./pages/CarsTypesPage"
import AddPostPage from "./pages/AddPostPage"
import ProfilePage from "./pages/ProfilePage"

// Layouts
import RootLayout from "./layouts/RootLayout"
import SinglePage from "./pages/SinglePage"
import AllCarpage from "./pages/AllCarpage"
import { QueryClient, QueryClientProvider } from "react-query"
import CarDetails from "./pages/CarDetails"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="all-cars" element={<AllCarpage />} errorElement={<p>something went wrong</p>} />

      <Route path="all-cars/:name" element={<CarDetails />} />
      <Route path="addpost" element={<AddPostPage />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="singlecar" element={<SinglePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </QueryClientProvider>
  )
}

export default App
