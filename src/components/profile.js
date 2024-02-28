import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ProfileView() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Fetch data from the API using Axios
        axios.get('http://127.0.0.1:8000/user/fetch/data/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        // Check if user is already logged in
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <div className="bg-gray-900">
            <div className='mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-4'>
                <div className="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-white">User Information</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-50">Personal details and addresses.</p>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        {userData && (
                            <>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-white">First name</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">{userData.customer.first_name}</dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-white">Last name</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">{userData.customer.last_name}</dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-white">Email address</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">{userData.customer.email}</dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-white">Contact Number</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">{userData.customer.contact_number}</dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-white">Addresses</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-200 sm:col-span-2 sm:mt-0">
                                        {userData.addresses.map(address => (
                                            <address key={address.id} className="not-italic">
                                                <b className='mr-2'>{address.id} : </b> {address.city}, {address.state}, {address.country}, {address.postal_code}
                                            </address>
                                        ))}
                                    </dd>
                                </div>
                            </>
                        )}
                    </dl>
                </div>
                <div className="px-4 mt-6 border-t sm:px-0">
                    {/* logout button */}
                    <button onClick={() => {
                        localStorage.removeItem('token');
                        window.location.reload();
                    }} className="mt-6 w-full flex items-center justify-center py-1 px-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto">
                        Log out
                    </button>
                </div>
            </div>
        </div>
    )
}
