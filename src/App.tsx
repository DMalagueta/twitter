import Main from './layout/Main'
import Login from './layout/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './layout/Index';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />}>
              <Route index element={<Main />} />
              <Route path='/login' element={<Login />}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
