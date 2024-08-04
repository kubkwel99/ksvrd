/** @format */

// pages/_app.tsx
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import { AppProps } from 'next/app';
import '../styles.css';
import videosData from '@/public/videos.json';

import Navbar from '../components/Navbar';
import HomePage from '../pages/homepage';
import AboutPage from './aboutpage';
import PortfolioPage from './portfolio';
import Footer from '../components/Footer';

function App({}: AppProps) {
  return (
    <div className='mt-20'>
      <nav>
        <Navbar />
      </nav>

      <main>
        <HomePage />
      </main>

      <section>
        <AboutPage />
        <PortfolioPage videos={videosData} />
      </section>

      <footer className=''>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
