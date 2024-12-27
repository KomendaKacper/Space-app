import { useEffect, useState } from "react";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({}); // Zmieniono stan z [] na {}

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:8081/api/apod');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Home</h1>

            {loading ? <p>Loading...</p> : (
                <div>
                    <h2>{data.date}</h2>
                    <img src={data.url} alt={data.explanation} />
                    <p>{data.explanation}</p>
                </div>
            )}
        </div>
    );
}
