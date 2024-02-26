import React, { useState } from 'react';
import logo from '/home/aryangupta/Personal_Space/Projects@2024/cosmo_craze/src/assets/cosmo_craze_logo.png';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function ForgotPasswordView() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [otp, setOTP] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [showOTPInput, setShowOTPInput] = useState(false); // State to control OTP input visibility

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

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        validateEmail(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !isValidEmail) {
            showToast('A valid email is required!', 'error');
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/user/login/customer/', {
                email: email,
            });

            if (response.status === 200) {
                showToast('OTP sent successfully!', 'success');
                setShowOTPInput(true); // Show OTP input field
            } else {
                showToast('Login failed. Please check your email.', 'error');
            }
        } catch (error) {
            // Remove this console.error() in production
            console.error('Error logging in:', error);
            showToast('Invalid Email Address ', 'error');
        }
    };

    const handleOTPChange = (e) => {
        setOTP(e.target.value);
    };

    const handleOTPSubmit = async (e) => {
        e.preventDefault();

        if (!email || !isValidEmail) {
            showToast('A valid email is required!', 'error');
            return;
        }

        if (!otp || otp.length !== 6) {
            showToast('A valid OTP is required!', 'error');
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/user/login/customer/', {
                email: email,
                otp: otp,
            });

            if (response.status === 200) {
                showToast('OTP verification successfull', 'success');
                navigate('/reset-password');
            } else {
                showToast('OTP verification failed', 'error');
            }
        } catch (error) {
            // Remove this console.error() in production
            console.error('Error verifying OTP:', error);
            showToast('Invalid OTP', 'error');
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
                        Forgot Password?
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={showOTPInput ? handleOTPSubmit : handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
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
                        {showOTPInput && (
                            <div>
                                <label htmlFor="otp" className="block text-sm font-medium leading-6 text-gray-900">
                                    Enter OTP
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="otp"
                                        name="otp"
                                        type="text"
                                        autoComplete="one-time-code"
                                        value={otp}
                                        onChange={handleOTPChange}
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        )}
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {showOTPInput ? 'Submit OTP' : 'Generate OTP'}
                            </button>
                        </div>
                        <div className="text-red-600 text-sm mt-2"></div>
                    </form>
                </div>
            </div>
        </>
    );
}
