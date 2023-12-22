import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TaskCard = ({ task, tasks, settasks }) => {
  const { title, priority, description, deadline, _id } = task;
  const handleDelete = (_id) => {
    axios
      .delete(`https://task-quasar-server.vercel.app/task/${_id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Task has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    const remaining = tasks.filter((task) => task._id !== _id);
    settasks(remaining);
  };
  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{priority}</div>
        </h2>
        <p>{description}</p>
        <p>{deadline}</p>
        <div className="card-actions ">
          <Link to={`/dashboard/edittask/${_id}`}>
            <button className="btn btn-outline">Edit Task</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-warning">
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
