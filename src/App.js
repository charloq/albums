import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import AppNav from "./components/AppNav";

const useStyles = makeStyles({
  button: {
    backgroundColor: "red",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <AppNav />
    </div>
  );
}

export default App;
