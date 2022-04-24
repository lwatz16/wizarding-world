const apiCalls = {
  getCharacters() {
    return fetch('https://cfhsik8pad.execute-api.us-east-1.amazonaws.com/dev/characters')
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        throw error
      })
  },

  getGiphy(characterName) {
    const apiKey = process.env.REACT_APP_GIPHY_API_KEY
    const query = `${characterName} harry potter`
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&rating=pg`

    return fetch(url)
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        throw error
      })
  }
}

export default apiCalls;