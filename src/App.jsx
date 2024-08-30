import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ui/theme-provider';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import ProvisioningPage from './components/ProvisioningPage';
import ManagementPage from './components/ManagementPage';
import MonitoringPage from './components/MonitoringPage';

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/provisioning" element={<ProvisioningPage />} />
            <Route path="/configuration" element={<ManagementPage />} />
            <Route path="/monitoring" element={<MonitoringPage />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;