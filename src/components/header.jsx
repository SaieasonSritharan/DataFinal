import React from 'react';
import { UserButton, useUser } from '@clerk/clerk-react';
import { Button } from './ui/button';

function Header() {
    const { user, isSignedIn } = useUser();

    return (
    <div className='flex justify-between items-center shadow-md p-5'>
            <img src="/autosales.png" width={200} height={150} alt="Auto Sales" />
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
                        <Button className='border rounded'>Submit Listing</Button>
                    </>
                ) : (
                    <Button>Sign In</Button>
                )}
            </div>
        
        </div>
    );
}

export default Header;
