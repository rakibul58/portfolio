import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

function App() {
  return (
    <div className="bg-gradient-to-tr from-green-100 to-cyan-100">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
