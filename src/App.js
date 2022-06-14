import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="main">
      <Sidebar></Sidebar>
      <div className="container">
        <Header></Header>
        <MainContent></MainContent>
      </div>
    </div>
  );
}

export default App;
