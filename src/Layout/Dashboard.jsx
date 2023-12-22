import { FaHome, FaProductHunt, FaTasks, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

import useAuth from "../hook/useAuth";
import TaskManagement from "../Dashboard/TaskManagement";

const Dashboard = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="flex">
        <div className="w-64 min-h-full bg-green-300">
          <ul className="menu p-4">
            <>
              <li>
                <NavLink to="/dashboard">
                  <FaUser></FaUser> Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/addtask">
                  <FaTasks></FaTasks> Add Task
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/tasklist">
                  <FaProductHunt></FaProductHunt>My Task
                </NavLink>
              </li>
            </>

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            <li onClick={handleLogOut} className="btn">
              LogOut
            </li>
          </ul>
        </div>
        <div className="flex-1 p-8">
          <div className="flex justify-between">
            <div>
              <p className="text-2xl font-semibold">
                Welcome Mr. <span>{user?.displayName}</span>
              </p>
            </div>
            <div>
              <img src={user?.photoURL} alt="" />
            </div>
          </div>
          <TaskManagement></TaskManagement>

          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
