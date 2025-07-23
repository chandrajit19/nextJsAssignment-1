"use client"
import Card from "../_components/Card";
import { useData } from "../_components/DataProvider"

const Show=()=>{
 const {state }=useData();

   console.log("return from show", state)
   return(<>
            <h2 className="m-5 text-3xl">Here is details of students</h2>
            <section className="m-5">
<div className="flex">
   {
     state.length === 0 ? (
       <p className="m-5">No data avaible!</p>
     ) : (
       state.map((obj, i) => (
         <div key={i} className="p-4 bg-white rounded-lg shadow-md border border-gray-200 w-max m-4 text-black">
           <Card obj={obj} i={i} />
         </div>
       ))
     )
   }
 </div>
            </section>
   
   </>)
}

export default Show