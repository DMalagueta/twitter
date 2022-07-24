import Login from './components/layout/Login'
import Index from './components/layout/Index';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import Notifications from './components/layout/Notifications';
import Main from './components/layout/Main';
import { useContext } from 'react';
import { AuthContext } from './contexts/Auth/AuthContext';
import Profile from './components/layout/Profile';
import Messages from './components/layout/Messages';
import SignIn from './components/layout/SignUp';



function App() {
    const auth = useContext(AuthContext);
  
    if (!auth.user){
      return(
        <Routes>
          <Route path='*' element={<Login />} />
          <Route path='/signup' element={<SignIn/>}/>
        </Routes>
        
      )
     }

  return (
           <Routes>
              <Route element={<RequireAuth><Index /></RequireAuth>}>
                <Route path='/' element={<RequireAuth><Main /></RequireAuth>} />
                <Route path='/notifications' element={<RequireAuth><Notifications /></RequireAuth>} />
                <Route path={`/${auth.user?.username}`} element={<RequireAuth><Profile /></RequireAuth>} />
                <Route path='/messages' element={<RequireAuth><Messages/></RequireAuth>} />
              </Route>
           </Routes>
  )
}

export default App
