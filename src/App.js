import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

function App() {
  return (
    <div className="bg-secondary bg-opacity-20">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
