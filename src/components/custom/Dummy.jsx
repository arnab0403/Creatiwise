import { useNavigate } from "react-router-dom";

function Dummy() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Dummy Page</h1>
      <p className="text-gray-600 mb-2">
        This is a placeholder dummy page for your dashboard project.
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Dummy Action
      </button>
      <button
        className="mt-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
    </div>
  );
}

export default Dummy;
