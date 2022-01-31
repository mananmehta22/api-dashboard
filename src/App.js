import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import "./App.css";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <SideBar />
        <Home/>
      </div>
    </div>
  );
}

export default App;
