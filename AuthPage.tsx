import React, { useState } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthPageProps {
  onLogin: (user: User) => void; // Simulate login
  onRegister: (user: User) => void; // Simulate registration
}

const AuthPage: React.FC<AuthPageProps> = ({ onLogin, onRegister }) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required.';
    }
    if (!formData.password.trim() || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }
    if (!isLoginMode) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required.';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match.';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const mockUser: User = { id: Date.now().toString(), name: formData.name || "Guest User", email: formData.email };

    if (isLoginMode) {
      console.log('Login attempt:', { email: formData.email, password: formData.password });
      onLogin(mockUser); // Simulate login
    } else {
      console.log('Register attempt:', { name: formData.name, email: formData.email, password: formData.password });
      onRegister(mockUser); // Simulate registration
    }
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setErrors({});
    setFormData({ name: '', email: '', password: '', confirmPassword: ''});
  };

  return (
    <div className="container mx-auto px-4 py-16 flex justify-center items-center min-h-[calc(100vh-200px)]"> {/* Adjust min-height as needed */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
        <h1 className="font-serif text-3xl font-bold text-center mb-8">{isLoginMode ? 'Login' : 'Create Account'}</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLoginMode && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required={!isLoginMode}
                     className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]`} />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required
                   className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]`} />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} required
                   className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]`} />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          {!isLoginMode && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input type="password" name="confirmPassword" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required={!isLoginMode}
                     className={`w-full px-3 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]`} />
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>
          )}
          <button type="submit"
                  className="w-full bg-[#D4AF37] text-white px-6 py-3 font-medium !rounded-button hover:bg-[#B8860B] transition-colors duration-300 cursor-pointer text-lg">
            {isLoginMode ? 'Login' : 'Register'}
          </button>
        </form>
        <div className="mt-6 text-center">
          <button onClick={toggleMode} className="text-sm text-[#D4AF37] hover:underline">
            {isLoginMode ? "Don't have an account? Register" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
