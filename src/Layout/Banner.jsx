import { Link } from "react-router-dom";
import useAuth from "../hook/useAuth";

const Banner = () => {
  const { user } = useAuth();
  return (
    <div
      className="hero min-h-[calc(100vh-66px)]"
      style={{
        backgroundImage: "url(https://i.ibb.co/wM0nxrG/Untitled-design.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <p className="font-bold text-4xl ">Empower Your Productivity</p>
          <p className="font-semibold text-2xl">
            Achieve More with TaskQuasar - Your Ultimate Task Management
            Solution
          </p>
          {user ? (
            <Link to="/dashboard">
              <button className="btn btn-primary">Let&apos;s Explore</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">Let&apos;s Explore</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
