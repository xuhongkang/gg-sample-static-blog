// Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ProgramPage from './pages/ProgramPage';
import BlogPage from './pages/BlogPage';

const AppRouter = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/program" element={<ProgramPage />} />
            <Route path="/blog" element={<BlogPage />} />
        </Routes>
    </Router>
);

export default AppRouter;
