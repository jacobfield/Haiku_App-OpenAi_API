import "./App.css";
import { Haikus } from "./components/Haikus.js";
import { haikuData } from "./components/haikuData.js";
function App() {
  return <Haikus haikuData={haikuData}></Haikus>;
}

export default App;
