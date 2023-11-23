import "./App.css";
import { Haikus } from "./components/Haikus.js";
import { haikuData } from "./components/haikuData.js";
import { Footer } from "./components/Footer.js";
function App() {
  return (
    <div className="app-wrapper">
      <Haikus haikuData={haikuData}></Haikus>
      <Footer></Footer>
    </div>
  );
}

export default App;
