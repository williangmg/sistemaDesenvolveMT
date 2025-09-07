import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { LoadingSpinner } from './components/UI/LoadingSpinner';

// Lazy Loading das páginas
const Home = React.lazy(() => import('./pages/Home'));
const PersonDetails = React.lazy(() => import('./pages/PersonDetails'));
const About = React.lazy(() => import('./pages/Sobre'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pessoa/:id" element={<PersonDetails />} />
            <Route path="/sobre" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;