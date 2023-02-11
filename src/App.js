import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"

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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="alltyps" element={<CarsTypesPage />} />
      <Route path="addpost" element={<AddPostPage />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="singlecar" element={<SinglePage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
