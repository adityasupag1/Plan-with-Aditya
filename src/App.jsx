import { useState } from "react";
import data from "./data";
import Tours from "./components/Tours";

function App() {
	const [tours, setTours] = useState(data);
   
    const removeTour=(id)=>{
        const newTours= tours.filter(tour=>tour.id !==id)
        console.log("render")
        setTours(newTours)
    }

    if (tours.length === 0) {
    return (
      <div className="flex justify-center items-center flex-col h-[100vh] ">
        <h2>No Tours Left</h2>
        <button className="mt-[18px] py-[10px] px-[80px] border-[1px] border-solid border-gray-300 bg-gray-200 transition-all transition-200 hover:text-black hover:bg-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

	return (
       
    <>
    <Tours arrayOfObject={tours} removeTour={removeTour}/>
    </>
    )
}

export default App;
