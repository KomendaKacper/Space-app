import { useEffect, useState } from "react";

export default function MarsPhoto() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8081/api/mars-photo");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data.photos[0]);
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
        Mars Rover Photos API The Mars Rover Photos API provides access to
        image data captured by NASA's rovers Curiosity, Opportunity, and
        Spirit during their exploration of Mars. It is designed for
        developers, educators, and citizen scientists to explore and utilize
        this rich collection of Martian imagery. Maintained by Chris Cerami, the
        API allows users to query photos based on: - Martian Sol: The number
        of Martian days since the rover's landing. - Earth Date: The
        calendar date on which the photo was taken. - Camera: Specific rover
        cameras, each offering unique perspectives. The API returns up to 25
        photos per request, with additional pages accessible via a pagination
        parameter. This powerful tool opens a window into Mars exploration,
        making it easy to explore the Red Planet's surface through the eyes of
        its robotic explorers.
      </p>
      {loading ? (
        <p className="text-xl font-semibold text-gray-250 animate-pulse">
          Loading...
        </p>
      ) : (
        <div className="p-6 shadow-md flex flex-col items-center justify-center gap-y-2 mt-2">
          <img
            className="w-2xl rounded-lg shadow-lg mb-4"
            src={data.img_src}
            alt={data.full_name}
          />
          <p className="text-justify">{data.camera.full_name}</p>
        </div>
      )}
    </div>
  );
}
