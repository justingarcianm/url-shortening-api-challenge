import { createContext, useContext, useState, useEffect } from "react";
import fetchData from "./linkFetch";


const StateWrapper = createContext()

const Context = ({ children }) => {

    const [ loading, setLoading ] = useState(false)
    const [ list, setList ] = useState([])
    const [ errorMessage, setErrorMessage ] = useState('')

    useEffect(() => {

        let saved = JSON.parse(localStorage.getItem('links'))
        saved ? setList(saved) : localStorage.setItem('links', JSON.stringify([]))

    },[])

    const addLink = async (e,url) => {

        e.preventDefault()

        setLoading(true)
        
        let data = await fetchData(url)
            
        if(data.ok) {

            let result = {
                short:data.result.full_short_link,
                original: data.result.original_link,
                id: data.result.code
            }  

            setToLocalStorage(result)
            setList( prevState => [...prevState, result])

        } else {
            console.error(data)
            setErrorMessage(data.error)
        }

        return setLoading(false)
    }

    const setToLocalStorage = data => {
        let current = JSON.parse(localStorage.getItem('links'))
        if(typeof current === 'object') {
            let updated = [...current, data]
            localStorage.setItem('links', JSON.stringify(updated))
        } else {
            console.error(data)
        }
    }

    const removeLink = id => {
        let allLinks = JSON.parse(localStorage.getItem('links'))
        if(typeof allLinks === 'object') {
            let updatedList = allLinks.filter( item => item.id !== id )
            setList(updatedList)
            localStorage.setItem('links', JSON.stringify(updatedList))
        } else {
            console.error(allLinks, id)
        }
    }

    return <StateWrapper.Provider value={{ loading, list, errorMessage, addLink, removeLink }}>
        { children }
    </StateWrapper.Provider>

}

export const ListState = () => {
    return useContext(StateWrapper)
}

export default Context