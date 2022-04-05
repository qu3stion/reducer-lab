import { useReducer } from "react";
import reducer from "../reducers/reducer";

const initialState = 0;

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function increment(value) {
    dispatch({ type: "ADD", payload: value });
  }
  function decrement(value) {
    dispatch({ type: "SUBTRACT", payload: value });
  }
  return (
    <div>
      <h1>This is home</h1>
      <button onClick={() => increment(5)}>Increase</button>
      <button onClick={() => decrement(5)}>Decrease</button>
      <h1>{state}</h1>
    </div>
  );
};
export default Home;
