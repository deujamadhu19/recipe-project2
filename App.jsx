import "./App.css"

function App(){
return(
  <div>
    <nav>
      <div style={{display: 'flex', alignItems:"baseline"}}>
        <span className="brand-name">
          fla<em>vour</em>
        </span>
        <span className="brand-tagline">React Edition</span>
      </div>
      <div className="saved-pill">
        <span>Saved</span>
        <span className="saved-pill-count">0</span>
      </div>
    </nav>
  </div>
);
}

export default App;
