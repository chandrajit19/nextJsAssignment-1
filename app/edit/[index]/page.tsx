import EditComp from "@/app/_components/EditComp";

const Edit=async ({params}:{params:Promise<{index:number}>})=>{
         const {index}=await params;
     
   return(<>
           <EditComp index={index} />
   </>)
}
export default Edit;