import React, { useState, useEffect } from 'react';
import logo from '../assets/cosmo_craze_logo.png';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function ResetPasswordView() {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [isValidNewPassword, setIsValidNewPassword] = useState(true);
    const [isValidConfirmNewPassword, setIsValidConfirmNewPassword] = useState(true);

    useEffect(() => {
        if (!location.state || !location.state.email) {
            // Redirect to forgot password page if email is not provided
            navigate('/forgot-password');
        } else {
            setEmail(location.state.email);
        }
    }, [location.state, navigate]);

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

    const validateConfirmNewPassword = (value) => {
        setIsValidConfirmNewPassword(value === newPassword && value.trim() !== ''); // check for non-empty and match with password
    };

    const handleNewPasswordChange = (e) => {
        const value = e.target.value;
        setNewPassword(value);
        setIsValidNewPassword(value.length >= 8);
    };

    const handleConfirmNewPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmNewPassword(value);
        validateConfirmNewPassword(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            showToast('Email address not found!', 'error');
            return;
        }

        if (!newPassword || !isValidNewPassword) {
            showToast('Enter a valid New Password ! ', 'error');
            return;
        }

        if (!confirmNewPassword || !isValidConfirmNewPassword) {
            showToast('Passwords do not match or empty ! ', 'error');
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/user/login/customer/', {
                email: email,
                new_password: newPassword
            });

            if (response.status === 200) {
                showToast('Password reset Successful!', 'success');
                setTimeout(() => {
                    navigate('/signin');
                }, 3000);
            } else {
                showToast('Password reset failed. Please try again after some time.', 'error');
            }
        } catch (error) {
            // Remove the console.error in production
            console.error('Error reseting your password:', error);
            showToast('Error reseting your passowrd!', 'error');
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
                        Reset Your Password
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="new_password" className="block text-sm font-medium leading-6 text-gray-900">
                                New Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="new_password"
                                    name="new_password"
                                    type="password"
                                    autoComplete="new_password"
                                    value={newPassword}
                                    onChange={handleNewPasswordChange}
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="confirm_new_password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Confirm New Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="confirm_new_password"
                                    name="confirm_new_password"
                                    type="password"
                                    autoComplete="confirm_new_password"
                                    value={confirmNewPassword}
                                    onChange={handleConfirmNewPasswordChange}
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-lg sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Reset Password
                            </button>
                        </div>
                        <div className="text-red-600 text-sm mt-2">
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
