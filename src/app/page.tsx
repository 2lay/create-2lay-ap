export default async function Home() {
    const protocol = process.env.NODE_ENV === 'development' ? 'http:' : 'https:';
    const host = process.env.NEXT_PUBLIC_VERCEL_URL || 'localhost:1337';
    const baseUrl = `${protocol}//${host}`;

    const response = await fetch(`${baseUrl}/api`);
    const data = await response.text();

    return (
        <div className="items-center justify-center flex flex-col mt-8">
            <h1>Message from Elysia:</h1>
            <div className="inline-flex items-center justify-center p-2 bg-zinc-950 rounded-lg border border-purple-300/30 drop-shadow-[0px_0px_10px_rgba(216,180,254,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4 17 10 11 4 5"></polyline>
                    <line x1="12" y1="19" x2="20" y2="19"></line>
                </svg>
            </div>
            <p>{data}</p>
        </div>
    );
}
