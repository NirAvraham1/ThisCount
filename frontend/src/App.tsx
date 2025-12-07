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
        <Register onNavigateToLogin={() => setCurrentPage('login')} />
      )}
    </div>
  );
}

export default App;