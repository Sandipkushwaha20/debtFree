
import { Route , BrowserRouter, Routes} from "react-router-dom"
import Body from "./components/Body"
import Login from "./components/Pages/Login"
import Home from "./components/Pages/Home"


function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>}>
            <Route path="/" element={<Home/>}/>
          </Route>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
