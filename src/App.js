import './App.css';
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Footer from "./components/Footer"
import data from "./data"

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key = {item.title} 
        {...item} 
        // Spreading objects as props, new ES6 way
      />
    )
  })
  return (
    <div>
      <Navbar></Navbar>
      {cards}
      <Footer></Footer>
    </div>
  );
}

export default App;
