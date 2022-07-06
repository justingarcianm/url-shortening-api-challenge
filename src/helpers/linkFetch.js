const fetchData = async link => {
    try {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
        const data = await response.json()
        return data
    } catch(err) {
        console.error(err)
    }
}

export default fetchData