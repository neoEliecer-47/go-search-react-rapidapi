import Links from "./Links"
import { useEffect, useState } from "react"
import { useDebounce } from "use-debounce"

import { useResultContext } from "../context/ResultContextProvider"
import { useNavigate } from "react-router-dom"


const Search = () => {
  
  const [ text, setText ] = useState('')
  const { searchTerm ,setSearchTerm } = useResultContext()//addtodo
  //const [ debounceValue ] = useDebounce(text, 300)
  const navigate = useNavigate()
  
  
  /*useEffect(() => {

    if(debounceValue) setSearchTerm(debounceValue)

  }, [debounceValue])*///el debounceValue cambiara cada 300 milisegundos por lo que el useeffect se ejecutara cada vez que esto cambie


  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!text.trim()){
      console.log('campo vacio')
      return setText('')
    }
    setSearchTerm(text)
    //if(!searchTerm) setSearchTerm(text)
    //if(e.target.value === searchTerm) setSearchTerm('')
    
    navigate('/search')
    
  }

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      
      <form action="" onSubmit={handleSubmit}>

            <input 
              type="text" 
              value={text}
              name={text}
              className="sm:w-96 w-80 h-8 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-5 text-black hover:shadow-lg text-lg"
              
              placeholder="Buscar algo en GoSearch"
              onChange={(e) => setText(e.target.value)}      
            />
            
            {
              text && (
                <button 
                  type="button" 
                  className="absolute top-1.5 right-4 text-lg font-semibold text-gray-500"
                  onClick={() => setText('')}  
                  
                >
                  x
                </button>
              )
              }
      </form>
      
      <Links />
    </div>
  )
}

export default Search