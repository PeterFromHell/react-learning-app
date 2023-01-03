import React from 'react'
import Link from 'next/link'

const Courses = (props) => {
    return (
        <Link href={`/lesson/${props.link}`} >
            <div className='border border-white hover:bg-slate-400 rounded w-[130px] h-[130px] px-2.5'>
                <p className='text-[40px] text-white text-center'>{props.lesson}</p>
            </div>
        </Link>
        
    )
}
export default Courses