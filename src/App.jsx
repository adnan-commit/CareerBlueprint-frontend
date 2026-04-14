import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
    <Toaster 
        position="top-center" 
        reverseOrder={false} 
        toastOptions={{
          // Custom style for your theme
          style: {
            background: '#0f172a', 
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '16px',
            backdropFilter: 'blur(10px)'
          },
          success: {
            iconTheme: {
              primary: '#2dd4bf', 
              secondary: '#0f172a',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444', 
              secondary: '#0f172a',
            },
          },
          duration: 4000, // Toast duration
        }}  
        
      />
      <AuthProvider>
      <Router>
        <div className="min-h-screen bg-background text-slate-200 selection:bg-brand-primary/30">
          <AppRoutes />
        </div>
      </Router>
      </AuthProvider>

    </>
  );
}

export default App;
