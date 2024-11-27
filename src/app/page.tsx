export default async function Home() {
    const protocol = process.env.NODE_ENV === 'development' ? 'http:' : 'https:';
    const host = process.env.NEXT_PUBLIC_VERCEL_URL || 'localhost:1337';
    const baseUrl = `${protocol}//${host}`;

    const response = await fetch(`${baseUrl}/api`);
    const data = await response.text();

    return (
        <div>
            <h1>Message from Elysia:</h1>
            <p>{data}</p>
        </div>
    );
}
