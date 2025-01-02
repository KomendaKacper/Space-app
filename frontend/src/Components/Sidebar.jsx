import { HiOutlineRocketLaunch } from "react-icons/hi2";


export default function Sidebar() {
  return (
    <div className="fixed top-0 h-screen w-48 flex flex-col justify-center items-center bg-gray-950 text-gray-200 p-4">
        <a href="/" class="gradient-link">
            <HiOutlineRocketLaunch className="w-auto h-32"/>   
        </a>
      <div className="flex-1 flex flex-col items-center justify-center space-y-5">
      <a href="apod" className="gradient-link">Astronomy Picture of the Day</a>
      <a href="apod" className="gradient-link">Astronomy Picture of the Day</a>
      <a href="apod" className="gradient-link">Astronomy Picture of the Day</a>
      <a href="apod" className="gradient-link">Astronomy Picture of the Day</a>
      <a href="apod" className="gradient-link">Astronomy Picture of the Day</a>
      </div>
    </div>
  );
}
