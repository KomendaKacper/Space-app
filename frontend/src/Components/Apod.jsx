import { useEffect, useState } from "react";

export default function Apod() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8081/api/apod");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ml-64">
      <h2 className="text-7xl font-bold text-gray-250 m-5 text-center">
        Astronomy Picture of the Day
      </h2>
      <p className="text-xl text-center">
        APOD (Astronomy Picture of the Day) is a popular feature provided by
        NASA and Michigan Technological University. Every day, it showcases a
        new image or photograph of space, accompanied by a detailed explanation
        written by a professional astronomer.
      </p>
      {loading ? (
        <p className="text-xl font-semibold text-gray-250 animate-pulse">
          Loading...
        </p>
      ) : (
        <div className="p-6 shadow-md flex flex-col items-center justify-center gap-y-2 mt-2">
          <img
            className="w-2xl rounded-lg shadow-lg mb-4"
            src={data.url}
            alt={data.explanation}
          />
          <p className="text-justify">{data.explanation}</p>
        </div>
      )}
    </div>
  );
}
