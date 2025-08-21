
import Card from "./Card"

export default function Tours({arrayOfObject, removeTour}){
    return  (
      <div className="min-h-screen font-[Poppins]">
       <div className="flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold my-12 px-20 py-5 border-[7px] border-dashed border-[rgb(1,17,160)] rounded-2xl">Plan with Aditya</h1>
       <div className="flex justify-center flex-wrap max-w-[1300px] transition-all duration-300 ease-in-out">
         { 
       arrayOfObject.map((ttour)=>(
         <Card key={ttour.id} object={ttour} removeTour={removeTour}></Card>
        ))}
       </div>
       </div>
       </div>
    )
}