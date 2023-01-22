export const getRecipes = () => {
  return fetch('https://burger-of-the-day-api.vercel.app/api/v1/recipes')
    .then(response => {
      if(!response.ok) {
        throw new Error(`${response.status}`)
      }
      return response.json()
    })
}