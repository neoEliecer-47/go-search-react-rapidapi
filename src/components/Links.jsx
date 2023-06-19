import { NavLink } from "react-router-dom"
import { useResultContext } from "../context/ResultContextProvider"

const links = [
    {url: '/search', text: "All 🔎"},
    {url: '/images', text: "Images 📷"}
]

const Links = () => {
 
  const { searchTerm } = useResultContext()
    /*useEffect(() => {
       if(ref.current.className.includes('active')){
        ref.current.classList.add('bg-gray-500')
        ref2.current.classList.remove('bg-gray-500')
        return
    } 
      
    if(ref2.current.className.includes('active')){
        ref2.current.classList.add('bg-gray-500')
        ref.current.classList.remove('bg-gray-500')
        return
    } 

    }, [])*/
    
    const classNav = `text-lg m-1 bg-blue-300 font-semibold rounded-md text-white p-1 border-black-3 hover:bg-blue-700 transition-all duration-500 dark:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white `
    const classNavActive = "bg-blue-700 dark:bg-gray-600 dark:text-gray-300"

    return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
        
        {
            <nav>
                
                <NavLink to="/search" className={({ isActive }) => (
                     isActive ? `${searchTerm ? "active" : ""} ${classNavActive}${classNav}` : `${classNav}`
                )} aria-current={`${searchTerm ? "page" : ""}`} >All 🔎
                </NavLink>


                <NavLink to="/images" className={({ isActive }) => (
                     isActive ? `${classNavActive}${classNav}` : `${classNav}`
                )} >Images 📷
                </NavLink>

                

                
                
            </nav>
        }
    {/*links.map(({ url, text }, index) => (
          <nav  className="">
                <button>

                <NavLink to={url} 
                className="hover:bg-gray-400 m-2 text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 p-5" 
                key={index}
                >
                    {text}
                </NavLink>
                </button>
          </nav>  
            
            
    ))*/}
    </div>
  )
}

export default Links