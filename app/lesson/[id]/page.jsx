import React from 'react'
import PocketBase from 'pocketbase'
import Image from 'next/image'
import Link from 'next/link'
//get pocketbase data
async function getDataFromPocketBase(lessonId) {
  const pb = new PocketBase('http://127.0.0.1:8090')
  const res = await pb
    .collection('lesson_')
    .getFirstListItem(`lesson="${lessonId}"`)
  return res
}

//main page
export default async function lessonPage({ params }) {
  const lesson = await getDataFromPocketBase(params.id)
  return (
    <div className="bg-[#1C1F24] w-screen h-screen flex flex-row items-center justify-center">
      <div className="border border-white w-1/3 h-screen p-3">
        <h1 className="text-white text-[40px]">{lesson.title}</h1>
        <br />

        {lesson.content1 !== '' && (
          <p className="text-white">{lesson.content1}</p>
        )}
        <br />

        {lesson.image1 !== '' && (
          <div className="bg-[#191919] rounded-xl  w-[30%] min-h-[25px] absolute m-auto">
            <Image src={lesson.image1} fill objectFit="contain" />
          </div>
        )}
        <br />
        <br />

        {lesson.content2 !== '' && (
          <p className="text-white">{lesson.content2}</p>
        )}
        <br />

        {lesson.image2 !== '' && (
          <div className="bg-[#191919] rounded-xl  w-[30%] min-h-[25px]  absolute m-auto">
            <Image src={lesson.image2} fill objectFit="contain" />
          </div>
        )}
        <br />
        <br />

        {lesson.content3 !== '' && (
          <p className="text-white">{lesson.content3}</p>
        )}
        <br />

        {lesson.image3 !== '' && (
          <div className="bg-[#191919] rounded-xl  w-[30%] min-h-[70px] absolute m-auto">
            <Image src={lesson.image3} fill objectFit="contain" />
          </div>
        )}
        <br />

        {lesson.content4 !== '' && (
          <p className="text-white">{lesson.content4}</p>
        )}
        <br />

        {lesson.image4 !== '' && (
          <div className="bg-[#191919] rounded-xl  w-[90%] min-h-[40px] relative m-auto">
            <Image src={lesson.image4} fill />
          </div>
        )}
        <br />

        {lesson.content5 !== '' && (
          <p className="text-white">{lesson.content5}</p>
        )}
        <br />

        {lesson.image5 !== '' && (
          <div className="bg-[#191919] rounded-xl  w-[90%]  min-h-[40px] relative m-auto">
            <Image src={lesson.image5} fill />
          </div>
        )}
        <br />

        {lesson.content6 !== '' && (
          <p className="text-white">{lesson.content6}</p>
        )}
        <br />

        {lesson.image6 !== '' && (
          <div className="bg-[#191919] rounded-xl  w-[90%]  min-h-[40px] relative m-auto">
            <Image src={lesson.image6} fill />
          </div>
        )}
        <br />

        <div className="flex flex-row items-center justify-center">
          {lesson.lesson > 1 && (
            <Link href={`/lesson/${parseInt(lesson.lesson) - 1}`}>
              <div className="border border-white hover:bg-slate-400 rounded w-[70px] flex items-center justify-center">
                <p className="text-white">返回</p>
              </div>
            </Link>
          )}

          <Link href={`/lesson/${parseInt(lesson.lesson) + 1}`}>
            <div className="border border-white hover:bg-slate-400 rounded w-[70px] flex items-center justify-center">
              <p className="text-white">下一篇</p>
            </div>
          </Link>
        </div>
      </div>

      {/* right side codesandbox*/}
      <div className="border border-white w-2/3 h-screen">
        {lesson.sandboxlink !== '' && (
          <iframe
            src={`https://codesandbox.io/embed/${lesson.sandboxlink}`}
            style={{ width: '100%', height: '100%', overflow: 'hidden' }}
            title="es6"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
        )}
        <br />
      </div>
    </div>
  )
}
