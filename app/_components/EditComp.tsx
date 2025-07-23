"use client"
import { ChangeEvent, useState } from "react";
import { useData } from "./DataProvider";
import { useRouter } from "next/navigation";


const EditComp=({index}:{index:number})=>{
         const {state, dispatch}=useData();
         const router=useRouter()
         const currObj=state[index]
         const [data, setData]=useState({name:currObj.name, age:currObj.age, email:currObj.email});
         const [bool, setBool]=useState(false)
         const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
            setData({...data, [e.target.name]:e.target.value})
         }
         
         const handleClick=()=>{
            state[index]=data;
            dispatch({type:"update", payLoad:{data, index}});
            setBool(true)
         }

            const handleCancle=()=>{
            dispatch({type:"cancle"});
            router.push("/show")
            // setBool(true)
         }
         return(<>
         
          <h2 className="m-5 text-2xl">Updates User details</h2>
             <form className="m-5" >
                <label>Name:
                  <input type="text" name="name" value={data.name} className="border p-2 ms-5"  onChange={handleChange}/>
                </label> <br />
                 
                   <label className="mt-2">Age:
                     <input type="number" name="age" value={data.age} className="border p-2 ms-8" onChange={handleChange}/>
                  </label> <br /> 

                <label className="mt-2">Email:
                     <input type="text" name="email" value={data.email} className="border p-2 ms-5.5" onChange={handleChange} />
                </label> <br /> <br />
                <input className="border p-2 hover:bg-gray-300" type="button" value="Cancle" onClick={handleCancle} /> &nbsp; &nbsp;
                <input className="border p-2 hover:bg-gray-300" type="button" value="Update data"  onClick={handleClick}/> 
               </form>    
               {
                 bool && <p className="m-5">Data has been updated succesfully</p>
               }
         </>)
   
}

export default EditComp;