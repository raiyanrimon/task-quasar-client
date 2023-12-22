import axios from "axios";
import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditTask = () => {
  const { register, handleSubmit, reset } = useForm();
  const { title, priority, description, deadline, _id } = useLoaderData();
  const id = useParams();
  console.log(id);
  const onSubmit = async (data) => {
    console.log(data);

    const task = {
      title: data.title,
      priority: data.priority,
      description: data.description,
      deadline: data.deadline,
    };

    try {
      const menuRes = await axios.patch(
        `http://localhost:5000/task/${_id}`,
        task
      );
      console.log(menuRes.data);

      if (menuRes.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.title} is Updated.`,
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
        <h2 className="text-2xl font-bold mb-6">Edit Task</h2>
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
              defaultValue={title}
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
                defaultValue={priority}
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
                defaultValue={deadline}
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
              defaultValue={description}
              {...register("description")}
              className="mt-1 p-2 w-full border rounded-md resize-none"
              rows="3"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
