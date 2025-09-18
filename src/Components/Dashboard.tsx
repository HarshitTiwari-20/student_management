
import { Link } from "react-router-dom";
import { ClassTeacherLogo } from "../assets/icons/ClassTeacher";
import SessionIcon from "../assets/icons/SessionIcon";
import { StudentsLogo } from "../assets/icons/StudentsLogo";

import { Card } from "./Card";

export function Dashboard() {
    return <div>
        <div className="text-2xl ">
            <Card title={"DashBoard"}  />

        </div>
        <Link to="/StudentAttendanceTable">
              <div className="bg-white rounded-md shadow-md border-gray-200 p-4 max-w-72 mt-4 cursor-pointer hover:shadow-lg">
                    <div className="flex " >
                    
                       <div className="flex items-center text-md">
                        <div className="flex">
        
                            <StudentsLogo/>
                        </div>
                           <div className="p-5 text-2xl">Total Students</div>
                        </div> 
        
                  
                    </div>
                    <div> Total Students: 100</div>
                    <div> Present: 58 </div>
                    </div>
                    
                    </Link>

                    <a href="https://qr-generator-red-ten.vercel.app/">
                    <div className="bg-white rounded-md shadow-md border-gray-200 p-4 max-w-72 mt-4 cursor-pointer hover:shadow-lg">
                    <div className="flex " >
                    
                       <div className="flex items-center text-md">
                        <div className="flex">
        
                            <StudentsLogo/>
                        </div>
                           <div className="p-5 text-2xl">Generate QR</div>
                        </div> 
        
                  
                    </div>
                    <div> Duration</div>
                    <div> Present: 58 </div>
                    </div>
</a>
                    <Link to="/schedule">
                    <div className="bg-white rounded-md shadow-md border-gray-200 p-4 max-w-72 mt-4 cursor-pointer hover:shadow-lg">
                        <div className="flex " >
                    
                        <div className="flex items-center text-md">
                            <div className="flex">
        
                            <SessionIcon/>
                            </div>
                            <div className="p-5 text-2xl">Shedule</div>
                        </div> 
        
                  
                        </div>
                        <div>Now:  Operating System </div>
                    </div>
                    </Link>



                    <Link to="/topics">

                    <div className="bg-white rounded-md shadow-md border-gray-200 p-4 max-w-72 mt-4 cursor-pointer hover:shadow-lg">
                        <div className="flex " >
                    
                        <div className="flex items-center text-md">
                            <div className="flex">
        
                            <ClassTeacherLogo/>
                            </div>
                            <div className="p-5 text-2xl"> Topics</div>
                            
                        </div>

                        </div>
                    </div>
                    </Link>



      
    </div>

}