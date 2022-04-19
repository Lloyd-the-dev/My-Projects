import './App.css';
import General from'./Components/General'
import Education from "./Components/Education"
import Experience from "./Components/Experience"
import Footer from "./Components/footer"

function App() {
  return (
    <div className="App">
       <General />
       <Education />
       <Experience />
       <Footer />
    </div>
  );
}

export default App;
