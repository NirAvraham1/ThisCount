interface RegistrationSuccessProps {
  onLoginClick: () => void; // פונקציה שתעביר אותנו למסך הלוגין
}

const RegistrationSuccess = ({ onLoginClick }: RegistrationSuccessProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-thiscount-gray-light font-sans text-gray-700">
      
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold cursor-pointer" onClick={onLoginClick}>
            <span className="text-blue-600">This</span><span className="text-gray-800">Count</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a className="text-gray-600 hover:text-thiscount-blue-primary font-medium cursor-pointer">About</a>
            <a className="text-gray-600 hover:text-thiscount-blue-primary font-medium cursor-pointer">For Businesses</a>
            <a className="text-gray-600 hover:text-thiscount-blue-primary font-medium cursor-pointer">Help</a>
            <button 
              onClick={onLoginClick}
              className="px-5 py-2 text-gray-800 border border-gray-200 rounded-lg hover:bg-gray-100 font-medium transition"
            >
              Log In
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div 
          className="bg-white rounded-2xl p-8 sm:p-12 text-center w-full max-w-lg shadow-2xl transition-all duration-300 transform hover:scale-[1.01]" 
          style={{boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.2), 0 10px 10px -5px rgba(59, 130, 246, 0.1)'}}
        >
          {/* Success Icon (Using SVG instead of external image for reliability) */}
          <div className="mx-auto mb-6 h-20 w-20 bg-green-100 rounded-full flex items-center justify-center">
             <svg className="h-12 w-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
             </svg>
          </div>

          <h1 className="text-4xl font-bold text-thiscount-text-primary mb-4">
            Registration Successful!<br/>Welcome to ThisCount.
          </h1>
          
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Your account has been created. Start earning points and unlocking discounts at your favorite stores today.
          </p>

          <div className="space-y-4">
            <button 
              onClick={onLoginClick}
              className="block w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              Log In to Your Account
            </button>
            <button 
              className="block w-full bg-white text-thiscount-orange border-2 border-thiscount-orange font-semibold py-3 px-6 rounded-full hover:bg-orange-50 transition duration-300"
            >
              Browse Current Offers
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-8">
            We've sent a verification email to your inbox. Please check it to secure your account.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-700 text-white">
        <div className="container mx-auto px-6 py-6 text-center">
          <div className="flex justify-center items-center space-x-6 mb-4">
            <a className="text-sm hover:underline cursor-pointer">Terms of Service</a>
            <a className="text-sm hover:underline cursor-pointer">Privacy Policy</a>
            <a className="text-sm hover:underline cursor-pointer">Contact Us</a>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            © 2025 ThisCount. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RegistrationSuccess;