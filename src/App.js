import NewState from "./NewState";
import OldState from "./OldState";

function App() {
  return (
    <div className="App">
      <p>Main App</p>
      <p>---------</p>
      <OldState />
      <p>---------</p>
      <NewState />
      <p>---------</p>
    </div>
  );
}

export default App;
