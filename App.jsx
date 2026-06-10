import "./App.css";

function RecipeCard({name, category, image}) {
  return (
    <div className = "recipe-card">
      <img className="card-photo" src={image} alt={name} />
      <div className="card-body">
       <div className="card-name">{name}</div>
       <div className="card-category">{category}</div>
       <div className="card-footer">
         <button className="btn-save">Save Recipe</button>
       </div>
      </div>
    </div>
  );
}

function App(){
  return (
    <div>
      <nav>
        <div style = {{display: "flex",alignItems: "baseline"}}>
          <span className="brand-name">
            Fla<em>vour</em>
          </span>
          <span className="brand-tagline">React Edition
          </span>
        </div>
        <div className="saved-pill">
          <span>Saved</span>
          <span className="saved-pill-count"></span>
        </div>
      </nav>
      
       <div ClassName="section-wrap">
        <div ClassName="recipe-grid">
          <RecipeCard
          name ="Teriyaki Chicken"
          category= "Chicken"
          image="https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2FPhoto%2FRecipes%2F2024-05-chicken-teriyaki-190%2Fchicken-teriyaki-190-171-horizontal" />
            <RecipeCard
          name ="Chicken briyani"
          category= "Chicken"
          image="https://www.cubesnjuliennes.com/wp-content/uploads/2020/01/Chicken-Biryani.jpg" />
            <RecipeCard
          name ="Chicken pizza"
          category= "Chicken"
          image="https://www.chefadora.com/_next/image?url=https%3A%2F%2Fchefadora-production.s3.ap-southeast-2.amazonaws.com%2Fmedium_1000529681_7684043161.jpg&w=640&q=75" />
            <RecipeCard
          name ="Chicken Tikka"
          category= "Chicken"
          image="https://flavorquotient.com/wp-content/uploads/2020/04/Chicken-Tikka-FQ-4-1-of-1.jpg" />
            <RecipeCard
          name ="Chicken wrap  "
          category= "Chicken"
          image="https://sailorbailey.com/wp-content/uploads/2023/04/Cajun-Chicken-Wrap.jpg" />
            <RecipeCard
          name ="Chicken Burger"
          category= "Chicken"
          image="https://www.willcookforsmiles.com/wp-content/uploads/2013/07/Buffalo-Chicken-Burgers-close-crop.jpg" />
       </div>
      </div>
    </div>
  );
}

export default App;
