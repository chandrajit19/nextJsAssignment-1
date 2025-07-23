"use client";
import React, { useContext, useReducer, createContext } from "react";
export type Person = {
  name: string;
  age: number;
  email: string;
};

type Action ={ type: "save"; payLoad: Person } | { type: "del"; payLoad: number } | {type:"update"; payLoad:{ data: Person; index: number }} | {type:"cancle"};

const ins: Person[] = [];
const reducer=(state: Person[], action: Action)=>{
   switch(action.type){
      case "save": return [...state, action.payLoad];
      case "del" : {
              const newState=state.filter((obj, ind)=>{if(action.payLoad!==ind) return obj})
              return  newState
      }
      case "update" : {
         const newState = [...state];
         newState[action.payLoad.index] = action.payLoad.data;
         return newState;
      }
     case "cancle" : return state;
      
      default: return state; 
   }
}

   interface ContextType{
      state: Person[],
      dispatch: React.Dispatch<Action>
   }
const DataContext=createContext({} as ContextType)
export const useData=()=>{
   return useContext(DataContext)
}

console.log("return from dataprovider:", ins)
const DataProvider=({children}:{children:React.ReactNode})=>{
   const [state, dispatch]=useReducer(reducer, ins)
   return(<>
             <DataContext value={{state, dispatch}}>
               {children}
             </DataContext>
   </>)
}
export default DataProvider;