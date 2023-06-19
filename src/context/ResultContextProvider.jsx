import { createContext, useContext, useState } from "react";


export const ResultContext = createContext()
const baseUrl = "https://google-search74.p.rapidapi.com/?query=naruto%20shippuden&limit=40&related_keywords=true"


const ResultProvider = ({ children }) => {

    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')//el index 1 del state(set...) remplaza el contenido que tenga el initialValue que tenga el state
    
    //crear tal vez un initialState ??
    const getResults = async (query) => {//search?query=word%20cup    //google?query=word%20cup

        try {
            setIsLoading(true)
            
            const res = await fetch(`https://google-search72.p.rapidapi.com/${query}&gl=us&lr=en&num=10&start=0&sort=relevance`, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '1fa3b0de71mshde21c0730efc226p1b7049jsn483ee8037b9b',
                    'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
                }
            })
            
            const data = await res.json()
            console.log(data)
            const objetoImage = {}

            /*if(query.includes('/search_image')) setResults(objetoImage(...data)) 
            else setResults(data)*/
            setResults(data)
            
        
        } catch (error) {
            console.log(error.message)
        }finally{
            setIsLoading(false)
        }
        
    }

    
    
    
    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )

}

export const useResultContext = () => useContext(ResultContext)
export default ResultProvider