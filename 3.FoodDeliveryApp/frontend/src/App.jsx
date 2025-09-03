import { Routes,Route, Navigate } from 'react-router-dom'
import SignUp from "./pages/SignUp.jsx"
import SignIn from "./pages/SignIn.jsx"
import ForgotPassword from './pages/ForgotPassword.jsx';
import useGetCurrentUser from './hooks/useGetCureentUser.jsx';
import { useSelector } from 'react-redux';
import Home from './pages/Home.jsx';
import useGetCity from './hooks/useGetCity.jsx';
import useGetMyShop from './hooks/useGetMyShop.jsx';
import CreateEditShop from './pages/CreateEditShop.jsx';

export const serverUrl='http://localhost:8000';

function App() {
  useGetCurrentUser();
  useGetCity()
  useGetMyShop()
  const {userData}=useSelector(state=>state.user)
  return (
    <div>
      <Routes>
        <Route path='/signup' element={!userData?<SignUp/>:<Navigate to={"/"}/>} />
        <Route path='/signin'  element={!userData?<SignIn/>:<Navigate to={"/"}/>} />
        <Route path='/forgot-password'  element={!userData?<ForgotPassword/>:<Navigate to={"/"}/>} />
        <Route path='/' element={userData?<Home/>:<Navigate to={"/signin"}/>} />
        <Route path='/create-edit-shop' element={userData?<CreateEditShop/>:<Navigate to={"/signin"}/>} />
      </Routes>
    </div>
  )
}

export default App;
