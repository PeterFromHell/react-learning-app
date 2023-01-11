import React from 'react'
import PocketBase from 'pocketbase'
import Link from 'next/link'

async function getDataFromPocketBase(lessonId) {
    const pb = new PocketBase('http://127.0.0.1:8090')
    const res = await pb.collection('lesson_').getFirstListItem(`lesson="${lessonId}"`)
    return res
}

export default async function lessonPage({ params }) {
    const lesson = await getDataFromPocketBase(params.id)
    console.log('aaaaa')
    return (
        <div className='bg-[#1C1F24] w-screen h-screen'>
            <h1 className='text-white'>{lesson.title}</h1>
            <Link href='/lesson'>
                <div className='border border-white hover:bg-slate-400 rounded w-[50px] flex items-center justify-center'>
                    <p className='text-white'>返回</p>
                </div>
            </Link>
        </div>
    )
}