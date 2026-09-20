import { Minus, Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/slices/counterSlice";
import Count from "./components/Count";

const App = () => {
  const dispatch = useDispatch();
  return (
    <div className="shadow-md bg-[#F8FAFC] h-75 w-62.5 grid place-items-center rounded-2xl">
      {/* Title */}
      <h1 className="text-2xl font-bold">Counter App</h1>
      {/* Count */}
      <Count />
      {/* Button Area */}
      <div className="flex justify-center items-center gap-0.5 w-full">
        {/* Minus Button */}
        <button
          className="bg-red-600 text-white hover:bg-red-700 p-2 rounded-s-2xl cursor-pointer"
          onClick={() => {
            dispatch(decrement());
          }}
          type="button"
          aria-label="Decrease count"
        >
          <Minus size={20} />
        </button>
        {/* Reset Button */}
        <button
          className="h-9 bg-slate-200 px-3 text-slate-800 hover:bg-slate-300 font-medium cursor-pointer"
          onClick={() => {
            dispatch(reset());
          }}
          type="button"
        >
          reset
        </button>
        {/* Plus Button */}
        <button
          className="bg-green-600 text-white hover:bg-green-700 p-2 rounded-e-2xl cursor-pointer"
          onClick={() => {
            dispatch(increment());
          }}
          type="button"
          aria-label="Increase count"
        >
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
};

export default App;
