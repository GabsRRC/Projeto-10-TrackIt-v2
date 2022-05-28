import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ScreenLogin from './components/ScreenLogin';
import ScreenSingUp from './components/ScreenSingUp';
import ScreenHabits from './components/ScreenHabits';
import ScreenToday from './components/ScreenToday';
import ScreenHistory from './components/ScreenHistory';
import UserContext from './components/UserContext';

export default function App() {

  const [token, setToken] = useState(null);
  const [picture, setPicture] = useState(null);
  const [selectDay, setSelectDay] = useState([]);
  const [progress, setProgress] = useState(null);
  const [reload, setReload]= useState(null);
  const [loading, setLoading]= useState(null);
  const [percent, setPercent] = useState (0);

  const contextValue = {token, setToken, picture, setPicture, selectDay, setSelectDay, progress, setProgress, reload, setReload, loading, setLoading, percent, setPercent};

  return (
    <UserContext.Provider value={contextValue}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ScreenLogin />} ></Route>
                <Route path="/cadastro" element={<ScreenSingUp />} ></Route>
                <Route path="/habitos" element={<ScreenHabits />} ></Route>
                <Route path="/hoje" element={<ScreenToday />} ></Route>
                <Route path="/historico" element={<ScreenHistory />} ></Route>
            </Routes>
        </BrowserRouter>
    </UserContext.Provider>
  );
}