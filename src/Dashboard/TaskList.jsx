import axios from "axios";
import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import useAuth from "../hook/useAuth";

const TaskList = () => {
  const { user } = useAuth();
  const [tasks, settasks] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/task?email=${user?.email}`)
      .then((res) => settasks(res.data));
  }, [user?.email]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          tasks={tasks}
          settasks={settasks}
          task={task}
        ></TaskCard>
      ))}
    </div>
  );
};

export default TaskList;
