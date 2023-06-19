import { Link } from "react-router-dom"
import Search from "./Search"


export const Navbar = ({ darkTheme, setDarkTheme }) => {
    return (
      <div className="p-5 pb-3 flex flex-wrap sm:justify-between justify-center items-center border-b-[4px] dark:border-gray-600 border-gray-200">
        <div className="flex justify-between items-center space-x-5 w-screen">
          <Link to="/">
            <p className="text-2xl bg-blue-500 font-bold text-white cursor-pointer py-1 px-2 rounded-md hover:bg-blue-600 dark:bg-gray-300 dark:text-gray-900">
                GoSearch🔍
            </p>
          </Link>
          <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-200 dark:text-gray-900 bg-white border rounded-md px-2 py-1 hover:shadow-lg hover:bg-gray-400 transition-all duration-500 dark:hover:shadow-white">
            {
              darkTheme ? 'Light 🌞' : 'Dark 🌙'
            }
          </button>
        </div>

        <Search />
      </div>
    )
  }
  