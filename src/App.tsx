import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import { authAtom } from "./atoms/auth"
import { useAtom } from "jotai"

function App() {
  const [auth] = useAtom(authAtom)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={auth ? <Home /> : <Navigate to="/login"/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
