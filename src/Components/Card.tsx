

import { DashboardIcon } from "../assets/icons/DashboardIcon";
interface Cardprops{
    title: string;
}

export function Card({title} : Cardprops ){
    return <div><div>
        <div className="bg-white rounded-md shadow-md border-gray-200 p-8 max-full cursor-pointer hover:shadow-lg">
            <div className="flex justify-between items-center" >
            
               <div className="flex items-center text-md">
                <div className="flex p-2">

                    <DashboardIcon/>
                </div>
                 {title}   
                </div>
                <div>Olivea Saha</div> 

          
            </div>
            </div>
            
           

            </div>
    </div>
}