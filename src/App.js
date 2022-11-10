import React from 'react';
import HomeScreen from './Screens/Home/HomeScreen';
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Screens/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut, selectUser } from './features/counter/userSlice';
import Profile from "./Screens/Profile/Profile";


const App = () => {

  const user = useSelector(selectUser) ;
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscrib = auth.onAuthStateChanged(
      (userAuth) => {
      if (userAuth) {
        dispatch(logIn({
          uid: userAuth.uid ,
          email: userAuth.email
        }))
      } else {
        dispatch(logOut()) ;
      }

    })
    return unsubscrib ;
  }, [dispatch]);

  return (
    <BrowserRouter className='app' >
      {!user ? (
        <Login />
      ): (
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route exact path='/' element={<HomeScreen />} />
        </Routes>
      ) }
    </BrowserRouter>
  )
}

export default App