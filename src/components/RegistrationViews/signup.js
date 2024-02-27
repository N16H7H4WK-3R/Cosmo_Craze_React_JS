import React, { useState, useEffect } from 'react';
import logo from '/home/aryangupta/Personal_Space/Projects@2024/cosmo_craze/src/assets/cosmo_craze_logo.png';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

export default function SignUp() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        contact_number: '',
        password: '',
        confirm_password: ''
    });

    const [validationErrors, setValidationErrors] = useState({
        email: '',
        contact_number: '',
        password: '',
        confirm_password: ''
    });

    const showToast = (message, type) => {
        toast[type](message, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            theme: 'dark',
        });
    };
    useEffect(() => {
        // Validate form data
        validateForm();

        // Check if user is already logged in
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData]);


    const validateForm = () => {
        const errors = {};
        if (!formData.email || !validateEmail(formData.email)) {
            errors.email = 'A valid email is required';
        }
        if (!formData.contact_number) {
            errors.contact_number = 'A valid Phone Number is required';
        }
        if (formData.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        }
        if (formData.confirm_password !== formData.password) {
            errors.confirm_password = 'Passwords do not match';
        }
        setValidationErrors(errors);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/user/register/customer/`, formData);
            if (response.status === 201) {
                const { token } = response.data;
                if (token) {
                    localStorage.setItem('token', token);
                    showToast('Sign Up Successful!', 'success');
                    setTimeout(() => {
                        navigate('/');
                    }, 2000);
                } else {
                    showToast('Token is undefined. Please try again later.', 'error');
                }
            }
        } catch (error) {
            if (error.response) {
                const { data } = error.response;
                const errorMessage = data?.errors?.email?.[0] || data?.errors?.contact_number?.[0] || data?.message || 'An error occurred while signing up. Please try again later.';
                showToast(errorMessage, 'error');
            } else {
                showToast('An error occurred while signing up. Please try again later.', 'error');
            }
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-24 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src={logo}
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Create a new account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-8" onSubmit={handleSubmit}>
                        <div className="sm:flex sm:space-x-4">
                            <div className="sm:w-1/2">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${validationErrors.email ? 'border-red-500' : ''}`}
                                        />
                                        {validationErrors.email && <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="contact_number" className="block text-sm font-medium leading-6 text-gray-900">
                                        Phone Number
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="contact_number"
                                            name="contact_number"
                                            type="text"
                                            autoComplete="contact_number"
                                            value={formData.contact_number}
                                            onChange={handleInputChange}
                                            className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${validationErrors.contact_number ? 'border-red-500' : ''}`}
                                        />
                                        {validationErrors.contact_number && <p className="text-red-500 text-xs mt-1">{validationErrors.contact_number}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2">
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${validationErrors.password ? 'border-red-500' : ''}`}
                                        />
                                        {validationErrors.password && <p className="text-red-500 text-xs mt-1">{validationErrors.password}</p>}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="confirm_password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Confirm Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="confirm_password"
                                            name="confirm_password"
                                            type="password"
                                            autoComplete="confirm_password"
                                            value={formData.confirm_password}
                                            onChange={handleInputChange}
                                            className={`block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${validationErrors.confirm_password ? 'border-red-500' : ''}`}
                                        />
                                        {validationErrors.confirm_password && <p className="text-red-500 text-xs mt-1">{validationErrors.confirm_password}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already a member ?{'  '}
                        <button onClick={() => navigate('/signin')} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign in to your account!
                        </button>
                    </p>
                </div>
            </div>
        </>
    )
}
