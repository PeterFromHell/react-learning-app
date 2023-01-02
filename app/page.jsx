import React from 'react'
import Link from 'next/link'

const HomePage = () => {
    return (
        <div className='bg-[#1C1F24] w-screen h-screen flex flex-col items-center justify-center'>
            <h1 className='text-white text-[150px] py-0.5'>React 教學</h1>
            <div className='border border-white hover:bg-slate-400 rounded w-36 flex items-center justify-center'>
                <Link className='text-[30px] text-white text-center' href='/entry'>開始</Link>
            </div>
        </div>
    )
}

export default HomePage