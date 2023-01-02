import React from 'react'

const Courses = (props) => {
    return (
        <div className='border border-white hover:bg-slate-400 rounded w-[130px] h-[130px] px-2.5'>
            <p className='text-[40px] text-white text-center'>{props.lesson}</p>
        </div>
    )
}
export default Courses