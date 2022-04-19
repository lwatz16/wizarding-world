const apiCalls = {
  getCharacters() {
    return fetch('http://hp-api.herokuapp.com/api/characters')
      .then(response => response.json())
  }
}

export default apiCalls;