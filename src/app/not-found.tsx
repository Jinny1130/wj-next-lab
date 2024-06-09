'use client'

import Link from 'next/link'

export default function NoDirectPage() {
    return (
        <>
            <title>404 PAGE</title>
            
            <main className="h-screen flex flex-col justify-center items-center text-center font-bold">
                <h1 className='text-4xl'>404 Not Found</h1>
                <h3 className="my-6">Sorry!<br/>The page you are looking for<br/>cannot be found 😢</h3>
                <Link href="/" className="px-5 py-3 rounded-md mt-6 shadow-xl shadow-cyan-500/50 bg-cyan-500 text-white hover:text-cyan-500 font-bold hover:bg-[#fff]">메인페이지로 이동하기</Link>
            </main>
        </>
    );
}