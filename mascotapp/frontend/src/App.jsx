import Navbar from "../src/components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes/MyRoutes";
import AuthProvider from "./auth/context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <MyRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
