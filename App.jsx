import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

import Login from './pages/Login';
import ProfileSetup from './pages/ProfileSetup';
import EntryQuiz from './pages/EntryQuiz';
import AvatarSelection from './pages/AvatarSelection';

import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import Monitor from './pages/Monitor';
import Progress from './pages/Progress';
import Practices from './pages/Practices';

import DoctorLayout from './components/layout/DoctorLayout';
import DoctorDashboard from './pages/doctor/DoctorDashboard';
import PatientDetail from './pages/doctor/PatientDetail';
import CrisisMode from './pages/CrisisMode';

// Placeholder Doctor Pages
const Patients = () => <div className="p-8">Patients List Page</div>;
const Schedule = () => <div className="p-8">Schedule Page</div>;
const Reports = () => <div className="p-8">Reports Page</div>;

// Placeholder Pages
const Settings = () => <div className="p-8">Settings Page</div>;

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/setup" element={<ProfileSetup />} />
          <Route path="/quiz" element={<EntryQuiz />} />
          <Route path="/avatar-selection" element={<AvatarSelection />} />
          <Route path="/crisis" element={<CrisisMode />} />

          {/* Protected Routes (Layout) */}
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/monitor" element={<Monitor />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/practices" element={<Practices />} />
            <Route path="/settings" element={<Settings />} />
          </Route>

          {/* Doctor Protected Routes */}
          <Route path="/doctor" element={<DoctorLayout />}>
            <Route path="dashboard" element={<DoctorDashboard />} />
            <Route path="patients" element={<Patients />} />
            <Route path="patients/:id" element={<PatientDetail />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
