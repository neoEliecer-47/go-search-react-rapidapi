
import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "./Home"
import NotFound from "./NotFound"
import Results from "./Results"
import { redirect } from "react-router-dom"



export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    redirect: "/search",
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,//no se si hace falta otro not found
        children: [
          {
            index: true,
            element: <Results />//cambiar por componente Search cuando la api este habilitada nuevamente
          },
          {
            path: '/search',
            element: <Results />
          },
          {
            path: '/images',
            element: <Results />
          }
        ]
      }
    ]
    
  }
])

