
import { useRouter } from "next/navigation";
import { useData } from "./DataProvider";
import { Person } from "./DataProvider";


const Card=({obj, i}: {obj: Person, i: number})=>{
   const {name, age, email}=obj;
   const {dispatch}=useData();
   const router=useRouter();
  return(<>
  <div  className="relative p-7 bg-white rounded-lg shadow-md border border-gray-200 w-full max-w-md">
      Name: {name} <br />
      Age: {age} <br />
      Email: {email}
      <button type="button" className="absolute top-1 right-1 text-red-500 cursor-pointer font-bold" onClick={()=>dispatch({type:"del", payLoad:i})} >X</button> <br />
      <button className="text-orange-400 float-end cursor-pointer" type="button" onClick={()=> router.push(`/edit/${i}`)}>Edit</button>
  </div>

   
   </>)
}
export  default Card;