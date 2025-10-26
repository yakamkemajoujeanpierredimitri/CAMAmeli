import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import Programs from './pages/Programs';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminTrainings from './pages/Admin/AdminTrainings';
import AdminEvents from './pages/Admin/AdminEvents';
import AdminStatistics from './pages/Admin/AdminStatistics';
import AdminTestimonials from './pages/Admin/AdminTestimonials';
import PrivateRoute from './components/Auth/PrivateRoute';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import AdminVerify from './pages/Auth/Adminverify';

const Unauthorized = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <h2 className="text-2xl font-bold text-red-600">You are not authorized to view this page.</h2>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify" element={<AdminVerify />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Admin Routes */}
        <Route element={<PrivateRoute allowedRoles={['admin']} />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/trainings" element={<AdminTrainings />} />
        <Route path="/admin/events" element={<AdminEvents />} />
        <Route path="/admin/statistics" element={<AdminStatistics />} />
        <Route path="/admin/testimonials" element={<AdminTestimonials />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;