import React, { useState } from 'react';
import { Page } from './types';
import PublicHeader from './components/PublicHeader';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Store from './pages/Store';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Booking from './pages/Booking';
import AdminDashboard from './pages/AdminDashboard';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  if (currentPage === Page.ADMIN) {
    return <AdminDashboard onNavigate={navigate} />;
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col font-display">
      <PublicHeader currentPage={currentPage} onNavigate={navigate} />
      
      <main className="flex-grow flex flex-col">
        {currentPage === Page.HOME && <Home onNavigate={navigate} />}
        {currentPage === Page.SERVICES && <Services onNavigate={navigate} />}
        {currentPage === Page.STORE && <Store />}
        {currentPage === Page.ABOUT && <About onNavigate={navigate} />}
        {currentPage === Page.CONTACT && <Contact />}
        {currentPage === Page.PROFILE && <Profile onNavigate={navigate} />}
        {currentPage === Page.BOOKING && <Booking />}
      </main>

      <Footer />
    </div>
  );
};

export default App;