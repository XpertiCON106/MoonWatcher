'use client';

import { useState } from 'react';

export default function Login() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isSignIn) {
            console.log('Sign in attempt:', formData);
        } else {
            console.log('Create account attempt:', formData);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const toggleMode = () => {
        setIsSignIn(!isSignIn);
        setFormData({ username: '', password: '' }); // Clear form when switching modes
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
                <div>
                    <h2 className="text-3xl font-bold text-center">Welcome to MoonWatch</h2>
                    <h2 className="text-2xl font-bold text-center mt-4">
                        {isSignIn ? 'Sign In' : 'Create Account'}
                    </h2>
                </div>

                <div className="flex justify-center space-x-4 text-sm">
                    <button
                        onClick={() => setIsSignIn(true)}
                        className={`px-4 py-2 rounded-md ${
                            isSignIn
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-600 hover:text-blue-600'
                        }`}
                    >
                        Sign In
                    </button>
                    <button
                        onClick={() => setIsSignIn(false)}
                        className={`px-4 py-2 rounded-md ${
                            !isSignIn
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-600 hover:text-blue-600'
                        }`}
                    >
                        Create Account
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        {isSignIn ? 'Sign In' : 'Create Account'}
                    </button>
                </form>
            </div>
        </div>
    );
} 