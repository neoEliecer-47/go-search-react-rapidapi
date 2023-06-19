import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext } from '../context/ResultContextProvider'
import Loading from './Loading'
import Home from './Home'


const Results = () => {
  
  const { getResults, results, searchTerm, setSearchTerm, isLoading } = useResultContext()
  const location = useLocation()
  const navigate = useNavigate()
  
  
  
  
  useEffect(() => {
    
    
 
    
    if(searchTerm){
    if(location.pathname === '/search')  {getResults(`search?query=${searchTerm}`)}
     else if(location.pathname === '/images')  {getResults(`imagesearch?query=${searchTerm}`)}
    }
    
    
  }, [location.pathname, searchTerm])//poner '/images' de primero en el switch!! tal vez deba limpiar el results antes de llenarlo con otra request

  
  if(isLoading) return <Loading />
  
  
  switch (location.pathname) {
    case '/search':
      return (
        
        <div className='flex flex-wrap justify-between space-y-6 px-5 pt-5'>
          
          {results?.items?.map(({ link: url, snippet, title }, index) => (//esto viene de la api
              <div key={index} className="md:w-2/5 w-full ">
                <a href={url} target="_blank" rel='noreferrer'>
                    <p className='text-sm'>
                      {url?.length > 30 ? url.substring(0, 30) : url} {/*el link me regresaba un undifined, esto era porque tardaba en cargar (tal vez) pero con el Optional Chaining(?) solucionamos el problema porque devuelve un simple undefined sin romper el sistema y luego el link puede cargar*/}
                    </p> {/*o... link es un componente de react-router-dom y habia ese conflicto y con el Optional Chaining(?) se soluciona */
                    }
                    <p className='font-semibold text-lg hover:underline dark:text-blue-300 text-blue-800'>
                      {title}
                    </p>

                    <p className='text-sm text-gray-600 dark:text-gray-400'>
                      {snippet}
                    </p>
                </a>
              </div>
      ))}
        </div>
      );
    case '/images':
      return (
        <div className='flex flex-wrap justify-center items-center'>
         
          {
            
              results?.items?.map(({ contextLink, thumbnailImageUrl, title}, index) => (//los question marks previenen errores si esta vacio algo
                <a className='sm:p-3 p-5' href={contextLink} key={index} target="_blank" rel='noreferrer'>
                  <img src={thumbnailImageUrl} alt={contextLink} loading="lazy" className=' h-18 w-15'/>
                  <p className='w-36 break-words text-sm mt-2'>
                    {title}
                  </p>
                </a>
    
              ) ) 
              
            
          }
          
        </div>
      );
    
  
    default:
      return (
        <>
        {
          
        }
        </>
      );
  }
  
  
}

export default Results