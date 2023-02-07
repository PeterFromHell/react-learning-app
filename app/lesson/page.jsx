import React from 'react'
import PocketBase from 'pocketbase'
import Lesson from '../../components/Lesson'

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

async function getDataFromPocketBase() {
  const pb = new PocketBase('http://127.0.0.1:8090')
  const res = await pb.collection('lesson_').getList(1, 30)
  return res.items
}

export default async function LessonPage() {
  const data = await getDataFromPocketBase()

  const lessons = data.map((item) => {
    return (
      <div className="h-[200px]">
        <Lesson
          key={item.id}
          lessonNum={item.lesson}
          title={item.title}
          id={item.lesson}
        />
      </div>
    )
  })

  return <div className="bg-[#1C1F24] w-screen h-screen">{lessons}</div>
}
