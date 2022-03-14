import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useEffect, useState } from "react";
import axios from "axios"
function App() {
  const [hose, setHouse] = useState([])
  const [text,setText] = useState(" ")
  useEffect(() => {
    gethouse()
  }, []);

  const gethouse = () => {
    axios.get(`http://localhost:8080/house`).then((res) => {
      setHouse(res.data)
    })
  }
  return (
    <div className="App">
      <AddHouse></AddHouse>
      <button className="toggleForm" onClick={() => {
        fetch(`http://localhost:8080/house`, {
          method: "POST",
          body: JSON.stringify({ title: text, purchased: false }),
          headers: {
            "Content-Type":"application/json"
          },
        }).then(() => {
          gethouse()
        })
      }} >
        Addhouse
      </button>
      {/* Show component based on state */}
      <br />
      <Rentals></Rentals>
    </div>
  );
}

export default App;
