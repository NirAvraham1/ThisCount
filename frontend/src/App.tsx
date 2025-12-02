import { useState } from 'react';
import Register from './Register';
import Login from './Login';

function App() {
  const [currentPage, setCurrentPage] = useState<'login' | 'register'>('login');

  return (
    <div>
      {currentPage === 'login' ? (
        <Login onSwitchToRegister={() => setCurrentPage('register')} />
      ) : (
        <div className="relative">
            <Register />
            {}
            <div className="absolute top-4 right-4">
                <button 
                    onClick={() => setCurrentPage('login')}
                    className="text-blue-600 text-sm font-bold bg-white px-3 py-1 rounded shadow"
                >
                    Back to Login
                </button>
            </div>
        </div>
      )}
    </div>
  );
}

export default App;