

import { Dashboard } from '../Components/Dashboard'

import Navbar from '../Components/Navbar'
import { Sidebar } from '../Components/Sidebar'


export function Home() {
 

  return (
    <div>
      
        <Navbar />
        <div className='flex'>
             <Sidebar />
        <div className="p-4 w-full bg-gray-100 pt-6">
  
          <Dashboard />
          
          </div>
        </div>
             
        
    </div>
  )
}


