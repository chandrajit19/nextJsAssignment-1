"use client";

import React, { ChangeEvent, useState } from "react";
import { useData } from "../_components/DataProvider";

const InputPage = () => {
     const {state, dispatch}=useData()
   const [data, setData]=useState({name:"", age:"", email:""})
   const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
      setData({...data, [e.target.name]:e.target.value})
   }
  
   const disable= data.name!=="" && data.age!=="" && data.email!=="";
   console.log("return from inputPage" , data, state)
   return(<>
               <h1 className="m-5 text-4xl">Input Page</h1>
               <p className="m-5">This page is designed to accept user input.</p>
               <form className="m-5" >
                <label>Name:
                  <input type="text" name="name" className="border p-2 ms-5"  onChange={handleChange}/>
                </label> <br />
                 
                   <label className="mt-2">Age:
                     <input type="number" name="age" className="border p-2 ms-8" onChange={handleChange}/>
                  </label> <br /> 

                <label className="mt-2">Email:
                     <input type="text" name="email" className="border p-2 ms-5.5" onChange={handleChange} />
                </label> <br /> <br />
                <input type="button" value="Save data" disabled={!disable} className="border p-2 ms-17 hover:bg-gray-100" onClick={()=>{
                    dispatch({ type: "save", payLoad: {...data,age: Number(data.age)} })
                }}/>
               </form>             
         </>)
}
export default InputPage;