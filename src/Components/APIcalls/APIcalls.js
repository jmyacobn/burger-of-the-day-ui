export const getRecipes = () => {
  return fetch('http://localhost:3001/api/v1/recipes')
    .then(response => {
      if(!response.ok) {
        throw new Error()
      }
      return response.json()
    })
}