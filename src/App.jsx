import "./App.css";
import data from "./data/data.json";

import Card from "./components/Card";

function App() {
  return (
    <div>
      {data.map((d, index) => (
        <Card
          id={d.id}
          name={d.name}
          picture={d.picture}
          index={index}
          key={d.id}
        />
      ))}
    </div>
  );
}

export default App;
