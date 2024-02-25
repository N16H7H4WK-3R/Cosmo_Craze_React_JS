import logo from '/home/aryangupta/Personal_Space/Projects@2024/cosmo_craze/src/assets/cosmo_craze_transparent_logo.png';
import Navigation from './navigationSection';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    return (
        <>
            <header className="bg-black sticky top-0 z-10">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
                    <div className="flex items-center">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-8 w-auto" src={logo} alt="Company Logo" />
                        </a>
                        <form style={{ width: "75vw" }} className="relative mx-4 lg:ml-12">
                            <label htmlFor="default-search" className="sr-only">Search</label>
                            <input type="search" id="default-search" className="w-full sm:w-full p-3 pl-4 text-sm text-gray-900 rounded-lg bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white" placeholder="Search products..." required />
                            <button type="submit" className="absolute inset-y-0 right-0 flex items-center justify-center text-white hover:text-blue-500 font-medium rounded-lg text-sm px-4">Search</button>
                        </form>
                    </div>
                    <div className="flex lg:flex-1 lg:justify-end">
                        <button onClick={() => navigate('/signin')} className="text-sm font-semibold leading-6 text-white hover:text-red-800">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </button>
                    </div>
                </nav>
                <Navigation />
            </header>
            {/* <p className="flex items-center justify-center bg-indigo-500 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">Get free delivery on orders over $100</p> */}
        </>
    );
}
