import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";
import { evenSelector } from "./store/selectors/evenSelector";

const App = () => {
  // Remove the state variable and create an atom in `store/atoms/count`
  // const [count, setCount] = useState(0);

  // wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
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
  // Just needs the value of the count, so we will use just the get recoil value hook
  const count = useRecoilValue(countAtom);

  return (
    <div>
      <b>{count}</b>
      <EventCountRenderer />
    </div>
  );
}

function Buttons() {
  // It needs both the count and setCount
  console.log("Re rendering");
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase Button
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease Button
      </button>
    </div>
  );
}

function EventCountRenderer() {
  const isEven = useRecoilValue(evenSelector);

  return <div>{isEven ? "It is Even" : null}</div>;
}
export default App;
