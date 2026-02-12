import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AdminRoutes from './routes/AdminRoutes';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AdminRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
