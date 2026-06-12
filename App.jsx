import { useState, useEffect, useRef } from "react";
import "./App.css";

function RecipeCard({ recipe, onSave, alreadySaved }) {
  return (
    <div className="recipe-card">
      <img
        className="card-photo"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <div className="card-body">
        <div className="card-name">{recipe.strMeal}</div>
        <div className="card-category">{recipe.strCategory}</div>
        <div className="card-footer">
          <button
            className="btn-save"
            onClick={() => onSave(recipe)}
            disabled={alreadySaved}
          >
            {alreadySaved ? "saved" : "saveRecipe"}
          </button>
        </div>
      </div>
    </div>
  );
}

function SavedCard({ recipe, onRemove }) {
  return (
    <div className="recipe-card">
      <img
        className="card-photo"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <div className="card-body">
        <div className="card-name">{recipe.strMeal}</div>
        <div className="card-category">{recipe.strCategory}</div>
        <div className="card-footer">
          <button
            className="btn-remove"
            onClick={() => onRemove(recipe.idMeal)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setsavedRecipes] = useState([]);
  const saveSectionRef = useRef(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((r) => r.json())
      .then((data) => setRecipes(data.meals));
  }, []);

  useEffect(() => {
    if (savedRecipes.length > 0) {
      saveSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [savedRecipes]);

  function saveRecipe(recipe) {
    const alreadySaved = savedRecipes.some((r) => r.idMeal === recipe.idMeal);
    if (alreadySaved) return;
    setsavedRecipes([...savedRecipes, recipe]);
  }

  function removeRecipe(id) {
    setsavedRecipes(savedRecipes.filter((r) => r.idMeal !== id));
  }

  return (
    <div>
      <nav>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <span className="brand-name">
            Fla<em>vour</em>
          </span>
          <span className="brand-tagline">React Edition</span>
        </div>
        <div className="saved-pill">
          <span>Saved</span>
          <span className="saved-pill-count">{savedRecipes.length}</span>
        </div>
      </nav>

      <div className="section-wrap">
        <div className="section-heading">
          <span className="section-title">Results</span>
          <span className="section-count">{recipes.length}Recipes</span>
        </div>
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              onSave={saveRecipe}
              alreadySaved={savedRecipes.some(
                (r) => r.idMeal === recipe.idMeal,
              )}
            />
          ))}
        </div>
      </div>

      {savedRecipes.length > 0 && (
        <div ref={saveSectionRef}>
          <div className="section-rule"></div>
          <div className="setion-wrap">
            <div className="section-heading">
              <span className="section-title">Saved recipes</span>
              <span className="section-count">{savedRecipes.length} saved</span>
            </div>

            <div className="recipe-grid">
              {savedRecipes.map((recipe) => (
                <SavedCard
                  key={recipe.idMeal}
                  recipe={recipe}
                  onRemove={removeRecipe}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
