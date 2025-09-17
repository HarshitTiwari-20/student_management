import { ClassesLogo } from "../assets/icons/Classes";
import { DashboardIcon } from "../assets/icons/DashboardIcon";
import SessionIcon from "../assets/icons/SessionIcon";
//import { SessionIcon } from "../assets/icons/SessionIcon";

export function Sidebar(){
    return <div className="h-screen bg-gray-100 border-r border-blue-800 w-70    left-0 top-0 cursor-pointer hover:shadow-lg">
        
        <div className="flex shadow-md text-gray-700 pt-4 pb-6 pl-4 rounded-md text-2xl items-center" >
            
            <div ><DashboardIcon /></div>
            <h1 className="text-blue-800 px-3 ">Dashboard </h1>
        </div>
        <div className="flex shadow-md text-gray-700 pt-4 pb-6 pl-4 rounded-md text-2xl items-center" >
            
            <div ><ClassesLogo /></div>
            <h1 className="text-blue-800 px-3 ">My Classes </h1>
        </div>
        <div className="flex shadow-md text-gray-700 pt-4 pb-6 pl-4 rounded-md text-2xl items-center" >
            
            <div ><SessionIcon /></div>
            <h1 className="text-blue-800 px-3 ">My Sessions </h1>
        </div>
       



       
    
    
    </div>
}