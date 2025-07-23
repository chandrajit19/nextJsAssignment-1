"use client";
import React, { ChangeEvent, CSSProperties, useState } from "react";
import { useData } from "../_components/DataProvider";

const InputPage = () => {
   const {state, dispatch}=useData()
   const [data, setData]=useState({name:"", age:"", email:""})
  //  this is for showing message when saved data 
   const [mess, setMess]=useState(false)

   const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
      setData({...data, [e.target.name]:e.target.value})
   }
  

   const handleClick=()=>{
    dispatch({ type: "save", payLoad: {...data,age: Number(data.age)} }) ;
    setData({name:"", age:"", email:""}) ;  
    setMess(true)     
   }

   const disable= data.name!=="" && data.age!=="" && data.email!=="";
   console.log("return from inputPage" , data, state, mess)
   return(<>
               <h1 className="m-5 text-4xl">Input Page</h1>
               <p className="m-5">This page is designed to accept user input.</p>
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
                <input type="button" value="Save data" disabled={!disable} className="border p-2 ms-17 hover:bg-gray-100" onClick={handleClick}/>
               </form>     
               {
                mess && <p className="m-5">Data has been saved succesfully!</p>      
               } 
         </>)
}
export default InputPage;


