import React from 'react'
import Courses from './Courses'
import data from './data'

const EntryPage = () => {

    const courses = data.map(course => {
        return <Courses lesson={course.num} />
    })
    console.log(courses)

    return (
        <div className='bg-[#1C1F24] w-screen h-screen flex flex-row items-center justify-center'>
            {courses}
        </div>
    )
}

export default EntryPage