import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

function App() {
  return (
    <div className="bg-gradient-to-tr from-green-100 to-cyan-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
