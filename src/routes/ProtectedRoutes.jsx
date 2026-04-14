import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Loader2 } from 'lucide-react';

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return (
    <div className="h-screen flex items-center justify-center bg-background">
      <Loader2 className="w-10 h-10 text-brand-primary animate-spin" />
    </div>
  );

  return user ? children : <Navigate to="/login" replace />;
};

export const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return null; 

  return !user ? children : <Navigate to="/dashboard" replace />;
};