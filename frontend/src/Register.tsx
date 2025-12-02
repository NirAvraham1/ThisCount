import { useState, useEffect } from 'react';

const Register = () => {
  const [isSetupMode, setIsSetupMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/auth/status');
        const data = await response.json();
        if (data.isSetupRequired) {
          setIsSetupMode(true);
        }
      } catch (error) {
        console.error("Could not check system status", error);
      } finally {
        setLoading(false);
      }
    };

    checkStatus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const endpoint = isSetupMode ? '/setup' : '/register';
    const url = `http://localhost:8080/api/auth${endpoint}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(isSetupMode 
          ? "System Setup Complete! You are the Admin. 🎉" 
          : "Registration Successful! Please Login.");
        
        if (isSetupMode) setIsSetupMode(false);
        
      } else {
        alert("Action Failed: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network Error: Is backend running?");
    }
  };

  if (loading) return <div className="text-center mt-20">Loading system status...</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className={`p-8 rounded-lg shadow-md w-96 transition-colors duration-500 ${isSetupMode ? 'bg-blue-50 border-2 border-blue-500' : 'bg-white'}`}>
        
        <h2 className="text-2xl font-bold mb-2 text-center text-blue-600">
          {isSetupMode ? '🚀 First Time Setup' : 'Create Account'}
        </h2>
        
        <p className="text-sm text-center text-gray-500 mb-6">
          {isSetupMode 
            ? "Database is empty. Create the first Admin user." 
            : "Join our community."}
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input 
              type="text" name="fullName" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Israel Israeli"
              onChange={handleChange} required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" name="email" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="user@example.com"
              onChange={handleChange} required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" name="password" 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="********"
              onChange={handleChange} required
            />
          </div>

          <button 
            type="submit" 
            className={`w-full text-white p-2 rounded-md transition duration-200 ${isSetupMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {isSetupMode ? 'Initialize System' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;