import Link from "next/link";

const NavBar=()=>{

   return(<>
      <nav className="bg-red-400 py-3 px-6">
         <ul className="flex space-x-6">
               <li>
                  <Link href="/" className="text-white hover:underline">Home</Link>
               </li>
               <li>
                  <Link href="/input" className="text-white hover:underline">Input</Link>
               </li>
               <li>
                  <Link href="/show" className="text-white hover:underline">Show</Link>
               </li>
         </ul>
      </nav>

   </>)
}
export default NavBar;