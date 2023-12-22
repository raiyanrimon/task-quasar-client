import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../hook/useAuth";

const AddTask = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = async (data) => {
    console.log(data);

    const task = {
      email: user?.email,
      title: data.title,
      priority: data.priority,
      description: data.description,
      deadline: data.deadline,
      status: "todo",
    };

    try {
      const taskRes = await axios.post(
        "https://task-quasar-server.vercel.app/task",
        task
      );
      console.log(taskRes.data);

      if (taskRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.title} is added to the tasklist.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Add New Task</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-600"
            >
              Task Title<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              {...register("title", { required: true })}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="priority"
                className="block text-sm font-medium text-gray-600"
              >
                Task Priority<span className="text-red-500">*</span>
              </label>
              <select
                id="priority"
                defaultValue="default"
                {...register("priority", { required: true })}
                className="mt-1 p-2 w-full border rounded-md"
              >
                <option disabled value="default">
                  Select a Priority
                </option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="deadline"
                className="block text-sm font-medium text-gray-600"
              >
                Deadline
              </label>
              <input
                type="date"
                id="deadline"
                {...register("deadline")}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-600"
            >
              Task Description
            </label>
            <textarea
              id="description"
              {...register("description")}
              className="mt-1 p-2 w-full border rounded-md resize-none"
              rows="3"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
