"use client";
import {Rise,Fall,Reset} from '@/Redux/action'
import { useDispatch, useSelector } from "react-redux";

const AboutUs = () => {
    const count = useSelector((state: any) => state.counter);
    const dispatch:any = useDispatch();
    const Update=()=>{
        dispatch(Rise())
    }
    
    return (
        <div className="flex flex-col gap-4 items-center justify-center h-screen">       
            <h1>About Us: {count}</h1>
            <div className='flex'>
            <button onClick={Update} className='bg-blue-300 p-2 text-white border-2 rounded-md'>Increase</button>
            <button onClick={()=>dispatch(Fall())} className='bg-blue-300 p-2 text-white border-2 rounded-md'>Decrease</button>
            <button onClick={()=>dispatch(Reset())} className='bg-blue-300 p-2 text-white border-2 rounded-md'>Reset</button>

            </div>
 
        </div>

    )
}

export default AboutUs