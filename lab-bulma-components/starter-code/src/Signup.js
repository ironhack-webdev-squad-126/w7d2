import React from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';

const Signup = () => {
    return (
        <div>
            <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" placeholder="********" />
            <CoolButton isSmall isSuccess>Submit</CoolButton>
        </div>
    )
}

export default Signup;