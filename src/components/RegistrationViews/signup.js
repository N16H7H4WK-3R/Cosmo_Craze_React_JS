import React, { useState } from 'react';
import logo from '/home/aryangupta/Personal_Space/Projects@2024/cosmo_craze/src/assets/cosmo_craze_logo.png';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function SignUp() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);

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

    const validateEmail = (value) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setIsValidEmail(emailRegex.test(value));
    };

    const validatePhoneNumber = (value) => {
        setIsValidPhoneNumber(value.trim() !== ''); // check for non-empty username
    };

    const validateConfirmPassword = (value) => {
        setIsValidConfirmPassword(value === password && value.trim() !== ''); // check for non-empty and match with password
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        validateEmail(value);
    };

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        setPhoneNumber(value);
        validatePhoneNumber(value);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setIsValidPassword(value.length >= 8);
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        validateConfirmPassword(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !isValidEmail) {
            showToast('A valid email is required ! ', 'error');
            return;
        }

        if (!phone_number || !isValidPhoneNumber) {
            showToast('A valid Phone Number is required ! ', 'error');
            return;
        }

        if (!password || !isValidPassword) {
            showToast('A valid Password is required ! ', 'error');
            return;
        }

        if (!confirm_password || !isValidConfirmPassword) {
            showToast('Passwords do not match or empty ! ', 'error');
            return;
        }

        try {
            // POST request to the signup endpoint
            const response = await axios.post('http://127.0.0.1:8000/user/register/customer/', {
                email: email,
                phone_number: phone_number,
                password: password,
                confirm_password: confirm_password,
            });

            if (response.status === 201) {
                showToast('Sign Up Successful!', 'success');
            } else {
                showToast('Sign Up failed. Please check your credentials.', 'error');
            }
        } catch (error) {
            // Remove this console.error line in production
            console.error('Error signing up:', error);
            showToast('An error occurred while signing up. Please try again later.', 'error');
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
                                            value={email}
                                            onChange={handleEmailChange}
                                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="phone_number" className="block text-sm font-medium leading-6 text-gray-900">
                                        Phone Number
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="phone_number"
                                            name="phone_number"
                                            type="text"
                                            autoComplete="phone_number"
                                            value={phone_number}
                                            onChange={handlePhoneNumberChange}
                                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                        />
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
                                            value={password}
                                            onChange={handlePasswordChange}
                                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                        />
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
                                            value={confirm_password}
                                            onChange={handleConfirmPasswordChange}
                                            className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                        />
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
