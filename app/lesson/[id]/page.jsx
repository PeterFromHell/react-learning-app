import React from 'react'
import PocketBase from 'pocketbase'
import Image from 'next/image'
import Link from 'next/link'

async function getDataFromPocketBase(lessonId) {
    const pb = new PocketBase('http://127.0.0.1:8090')
    const res = await pb.collection('lesson_').getFirstListItem(`lesson="${lessonId}"`)
    return res
}

export default async function lessonPage({ params }) {
    const lesson = await getDataFromPocketBase(params.id)
    const a = lesson.content.replace("\n", "\n")
    return (
        <div className='bg-[#1C1F24] w-screen h-screen flex flex-row items-center justify-center'>
            <div className='border border-white w-1/3 h-screen'>
                <h1 className='text-white text-[40px]'>{lesson.title}</h1>
                <p className='text-white'>{a}</p>
                <image src='images/P01.png'></image>
            </div>
            <div className='border border-white w-2/3 h-screen'>
                <iframe src="https://codesandbox.io/embed/beautiful-haze-sf2il8?codemirror=1&fontsize=14&hidenavigation=1&theme=dark"
                style={{"width":"100%", "height":"100%", "overflow":"hidden"}}
                title="es6"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
                
                
            </div>
            {/*<Link href='/lesson'>
                <div className='border border-white hover:bg-slate-400 rounded w-[50px] flex items-center justify-center'>
                    <p className='text-white'>返回</p>
                </div>
            </Link>*/}
        </div>
    )
}