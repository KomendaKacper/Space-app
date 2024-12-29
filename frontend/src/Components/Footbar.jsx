export default function Footbar() {
    return (
        <nav className="navbar flex flex-col h-full w-64 bg-violet-950 text-white fixed">
            <p className="text-4xl font-bold mt-4">Space App</p>
            <a href="/apod" className="text-xl">Astronomy Picture of the Day</a>
            <span className="text-l font-semibold m-4">Explore space with our app</span>
        </nav>
    );
}
