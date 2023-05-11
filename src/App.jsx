import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadCoffees);
  // console.log(coffees);
  return (
    <div className="m-20">
      <h1 className="text-6xl text-purple-600 my-20 text-center">
        Hot Cold Coffee {coffees.length}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
