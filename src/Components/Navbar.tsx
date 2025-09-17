

import { Link } from "react-router-dom";
import userIcon from "../assets/icons/user-icn.png"; // Make sure the file name matches

export default function Navbar() {
    return <div>
        <div className=" bg-blue-500 p-6 text-gray-100 font-bold text-xl  ">
            <div className="p-2.5 py-0.5 ">
                <Link to ="/Home">
               
                <span className="cursor-pointer hover:shadow-lg ">
                    
                     
            Student Attendance</span></Link>

            
            <div className="float-right p-2.5 flex justify-center cursor-pointer hover:shadow-lg">
                        <img src={userIcon} alt="User Icon" className="size-8" />
                    </div>
            <Link to="/signin">
                <span className="flex p-2  float-right cursor-pointer hover:shadow-lg"> Admin </span></Link>
            </div>
        </div>
        



    </div>
}