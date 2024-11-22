import React from 'react';
import { SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

function Header() {
    const { user, isSignedIn } = useUser();

    return (
    <div className='flex justify-between items-center shadow-md p-5'>
            <img src="/autosales.png" width={150} height={100} alt="Auto Sales" />
            <ul className='hidden md:flex gap-16'>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</li>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
                <li className='font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary'>Preowned</li>
            </ul>
            <div className='flex items-center gap-5'>
                {isSignedIn ? (
                    <>
                        <UserButton />
                        <Link to={'/profile'}>
                        <Button className='border rounded'>Submit Listing</Button>
                        </Link>
                    </>
                ) : (
                    <SignInButton>
                    <Button>Sign In</Button>
                    </SignInButton>
                )}
            </div>
        
        </div>
    );
}

export default Header;
