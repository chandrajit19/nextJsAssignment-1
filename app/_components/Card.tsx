import { useData } from "./DataProvider";

interface ObjType{
    name: string;
    age: number;
    email: string;
}
const Card=({obj, i}: {obj: ObjType, i: number})=>{
   const {name, age, email}=obj;
   const {dispatch}=useData();
  
  return(<>
  <div className="relative p-4 bg-white rounded-lg shadow-md border border-gray-200 w-full max-w-md">
      Name: {name} <br />
      Age: {age} <br />
      Email: {email}
      <button type="button" className="absolute top-1 right-1 text-red-500 cursor-pointer font-bold" onClick={()=>dispatch({type:"del", payLoad:i})} >X</button>
  </div>

   
   </>)
}
export  default Card;