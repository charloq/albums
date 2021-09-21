import "./App.css";
import AppNav from "./components/AppNav";
import Albums from "./containers/Albums";
import Album from "./containers/Album";

function App() {
  return (
    <div className="App">
      <AppNav />
      <Album />
      <Albums />
    </div>
  );
}

export default App;
