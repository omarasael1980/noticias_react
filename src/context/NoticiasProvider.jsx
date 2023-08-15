import { createContext, useState, useEffect } from "react"
import axios from "axios"
const NoticiasContext = createContext()
const NoticiasProvider = ({children})=>{
  const [categoria, setCategoria] =useState('general')
  const [noticias, setNoticias] =useState([])
  const [pagina, setPagina] =useState(1)
  const [totalNoticias, setTotalNoticias] =useState(0)

  const handleChangeCategoria = e=>{
 
    setCategoria(e.target.value)
  }
  const handleChangePagina=(e,valor) => {
        setPagina(valor)
  }
  useEffect (()=>{
    const consultarApi =async()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&pageSize=20&apiKey=${import.meta.env.VITE_API_KEY}`
      const {data } =await axios(url)
      setNoticias(data.articles)
      setTotalNoticias(data.totalResults)
      setPagina(1)
      
    }
    consultarApi()
  },[categoria])
  useEffect (()=>{
    const consultarApi =async()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&pageSize=20&apiKey=${import.meta.env.VITE_API_KEY}`
      const {data } =await axios(url)
      setNoticias(data.articles)
      setTotalNoticias(data.totalResults)
      window.document.scrollingElement.scrollTop=0
       
     
    }
    consultarApi()
  },[pagina])

    return (
        <NoticiasContext.Provider
        value={{
          categoria, 
          handleChangeCategoria,
          noticias,
          totalNoticias,
          pagina, 
          setPagina,
          handleChangePagina
        }}
        >
          {children}  
        </NoticiasContext.Provider>
    )
}
export {
  NoticiasProvider
}
export default NoticiasContext

 
