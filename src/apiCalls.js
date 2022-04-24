const apiCalls = {
  getCharacters() {
    return fetch('https://cfhsik8pad.execute-api.us-east-1.amazonaws.com/dev/characters')
      .then(response => {
        console.log('res', response)
        return response.json()
      })
      .then(data => {
        console.log(data)
        return data
      })
      .catch(error => {
        console.log(error)
        throw error
      })
  },

  getGiphy(characterName) {
    const apiKey = process.env.REACT_APP_GIPHY_API_KEY
    console.log(process.env.REACT_APP_GIPHY_API_KEY)
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${characterName}`

    console.log(url)
    return fetch(url)
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        throw error
      })
  }
}

export default apiCalls;