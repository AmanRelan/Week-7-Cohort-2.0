import { useContext, useState } from "react";
import { CountContext } from "./context";

const App = () => {
  const [count, setCount] = useState(0);

  // wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
};

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}
function CountRenderer() {
  const { count } = useContext(CountContext);

  return <div>{count}</div>;
}

function Buttons() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Button
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease Button
      </button>
    </div>
  );
}

export default App;
