export function RecipesIndex(props) {
  return (
    <div>
      <h1>All Recipes</h1>
      {props.recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <img src={recipe.image_url} />
          <p>Width: {recipe.ingredients}</p>
          <p>Height: {recipe.directions}</p>
        </div>
      ))}
    </div>
  );
}
