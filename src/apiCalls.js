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
  }
}

export default apiCalls;