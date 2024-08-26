import { useState } from "react";
import "./App.css";

function App() {
  const countarys = [
    { name: "India", cities: ["Delhi", "Mumbai", "Kolkata"] },
    { name: "USA", cities: ["New York", "Los Angeles", "Chicago"] },
    { name: "UK", cities: ["London", "Manchester", "Birmingham"] },
    { name: "Australia", cities: ["Sydney", "Melbourne", "Brisbane"] },
  ];

  const [countary, changeCountary] = useState(countarys[0].cities);

  return (
    <>
      <select
        onChange={(e) => changeCountary(countarys[e.target.value].cities)}
        name="countary"
        id="countary"
      >
        {countarys.map((item, index) => (
          <option key={item.name + index} value={index}>
            {item.name}
          </option>
        ))}
      </select>
      <select name="city" id="">
        {countary.map((item, index) => (
          <option key={index} value="">
            {item}
          </option>
        ))}
      </select>
    </>
  );
}

export default App;
