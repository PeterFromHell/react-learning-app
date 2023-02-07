import React from 'react'
import Link from 'next/link'
import { ThreejsPlane } from '../components/ThreejsPlane'
const HomePage = () => {
    return (
        <>
            <div className='absolute flex flex-col items-center justify-center m-auto'>
                <h1 className='text-white text-[150px]'>React 教學</h1>
                <div className='border border-white hover:bg-slate-400 rounded w-36 flex items-center justify-center'>
                    <Link className='text-[30px] text-white text-center' href='/lesson'>開始</Link>
                </div>
            </div>
            <ThreejsPlane />  
        </>
    )
}

export default HomePage
