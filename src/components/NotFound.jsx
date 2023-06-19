import { Link, useRouteError, useNavigate, redirect } from "react-router-dom"

const NotFound = () => {

  const error = useRouteError()
  const navigate = useNavigate()
    
  return (
    <div>
      <h1>404</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  )
}

export default NotFound