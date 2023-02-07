import React from 'react'
import Link from 'next/link'

const Lesson = (props) => {
  return (
    <Link href={`/lesson/${props.id}`}>
      <div className="border border-white hover:bg-slate-400 rounded w-full h-[130px] flex flex-col items-center justify-center">
        <h1 className="text-[40px] text-white text-center">
          {props.lessonNum}
        </h1>
        <p className="text-white text-[40px]">{props.title}</p>
      </div>
    </Link>
  )
}

export default Lesson
