import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Students from './Pages/Students/Students';
import Teachers from './Pages/Teachers/Teachers';
import Finance from './Pages/Finance/Finance';
import Events from './Pages/Events/Events';
import Food from './Pages/Food/Food';
import User from './Pages/User/User';
import Chat from './Pages/Chat/Chat';
import LastestActivity from './Pages/LastestActivity/LastestActivity';







function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/food" element={<Food />} />
          <Route path="/user" element={<User />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/lastestactivity" element={<LastestActivity />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;