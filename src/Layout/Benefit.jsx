const Benefit = () => {
  return (
    // ... (Existing code)

    <div className="mt-12">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
        Discover Who Can Benefit
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* User Type Card: Developers */}
        <div className="bg-blue-500 p-8 rounded-lg shadow-lg text-white">
          <h3 className="text-2xl font-semibold mb-4">Developers</h3>
          <p className="text-base">
            Simplify project management, organize tasks, and collaborate
            seamlessly with your team.
          </p>
        </div>

        {/* User Type Card: Corporate Professionals */}
        <div className="bg-green-500 p-8 rounded-lg shadow-lg text-white">
          <h3 className="text-2xl font-semibold mb-4">
            Corporate Professionals
          </h3>
          <p className="text-base">
            Manage tasks, projects, and deadlines effortlessly. Stay organized
            and supercharge productivity.
          </p>
        </div>

        {/* User Type Card: Bankers */}
        <div className="bg-purple-500 p-8 rounded-lg shadow-lg text-white">
          <h3 className="text-2xl font-semibold mb-4">Bankers</h3>
          <p className="text-base">
            Effectively handle financial tasks, track progress, and enhance
            collaboration within your team.
          </p>
        </div>

        {/* Add more user type cards as needed */}
      </div>
    </div>

    // ... (Other code)
  );
};

export default Benefit;
