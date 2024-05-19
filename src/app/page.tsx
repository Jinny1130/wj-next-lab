'use client'

export default function NoDirectPage() {
    return (
        <>
            <title>404 PAGE</title>
            
            <main className="h-screen flex flex-col justify-center items-center text-center">
                <h1>404 Not Found</h1>
                <h3 className="mt-4 mb-2">Sorry!</h3>
                <h3>The page you are looking for<br/>cannot be found 😢</h3>
            </main>
        </>
    );
}