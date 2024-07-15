
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { db, database } from '../../Firebase/FirebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function CustomerRegister() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        residenceAddress: "",
        password: "",
        confirmPassword: ""
    });

    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    function changeHandler(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    async function submitHandler(event) {
        event.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            toast.error("Invalid email format.");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(db, formData.email, formData.password);
            const user = userCredential.user;
            const userId = user.uid;

            await addDoc(collection(database, "UserData"), {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                residenceAddress: formData.residenceAddress
            });

            navigate('/login', { state: { userId } });
            toast.success("Registration successful!");
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                toast.error("Email is already in use.");
            } else {
                toast.error("An error occurred during registration.");
                console.error("Error registering user:", error);
            }
        }
    }

    return (
        <form method='POST' onSubmit={submitHandler} className='w-full flex flex-col justify-center items-center'>
            <h2 className='text-3xl mb-4 mt-9 text-white underline'>Customer Registration Form</h2>
            <div className='flex flex-col gap-6'>
                <div className='flex gap-3'>
                    <label>
                        <p className='text-[18px]'>First Name: <sup className='text-red-700'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='firstName'
                            value={formData.firstName}
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            className='px-[12px] py-[4px] rounded-[8px] text-[18px] bg-richblack-700 border-none shadow-sm outline-none'
                        />
                    </label>
                    <label>
                        <p className='text-[18px]'>Last Name: <sup className='text-red-700'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='lastName'
                            value={formData.lastName}
                            onChange={changeHandler}
                            placeholder='Enter Last Name'
                            className='px-[12px] py-[4px] rounded-[8px] text-[18px] bg-richblack-700 border-none shadow-sm outline-none'
                        />
                    </label>
                </div>
                <label className='flex flex-col gap-1 w-[470px]'>
                    <p className='text-[18px]'>Email Address: <sup className='text-red-700'>*</sup></p>
                    <input
                        autoComplete='off'
                        type='email'
                        placeholder='Enter email address'
                        required
                        value={formData.email}
                        onChange={changeHandler}
                        name='email'
                        className='px-[12px] py-[4px] rounded-[8px] text-[18px] bg-richblack-700 border-none shadow-sm outline-none'
                    />
                </label>
                <label className='flex flex-col gap-1 w-[470px]'>
                    <p className='text-[18px]'>Residence Address: <sup className='text-red-700'>*</sup></p>
                    <input
                        autoComplete='off'
                        type='text'
                        placeholder='Enter residence address'
                        required
                        value={formData.residenceAddress}
                        onChange={changeHandler}
                        name='residenceAddress'
                        className='px-[12px] py-[4px] rounded-[8px] text-[18px] bg-richblack-700 border-none shadow-sm outline-none'
                    />
                </label>
                <div className='flex gap-3'>
                    <label className='relative'>
                        <p className='text-[18px]'>Create Password: <sup className='text-red-700'>*</sup></p>
                        <input
                            type={showPassword1 ? "text" : "password"}
                            placeholder='Enter password'
                            required
                            value={formData.password}
                            onChange={changeHandler}
                            name='password'
                            className='px-[12px] py-[4px] rounded-[8px] text-[18px] bg-richblack-700 border-none shadow-sm outline-none'
                        />
                        <span onClick={() => setShowPassword1(!showPassword1)} className='absolute right-2 top-9 cursor-pointer'>
                            {showPassword1 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>
                    </label>
                    <label className='relative'>
                        <p className='text-[18px]'>Confirm Password: <sup className='text-red-700'>*</sup></p>
                        <input
                            type={showPassword2 ? "text" : "password"}
                            placeholder='Enter password'
                            required
                            value={formData.confirmPassword}
                            onChange={changeHandler}
                            name='confirmPassword'
                            className='px-[12px] py-[4px] rounded-[8px] text-[18px] bg-richblack-700 border-none shadow-sm outline-none'
                        />
                        <span onClick={() => setShowPassword2(!showPassword2)} className='absolute right-2 bottom-2 cursor-pointer'>
                            {showPassword2 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </span>
                    </label>
                </div>
                <button className='px-[12px] py-[8px] rounded-[8px] bg-yellow-600 text-[18px] mt-5 text-richblack-900 font-medium'>Create Account</button>
                <div className='w-full h-[1px] bg-white'></div>
                <button className='px-[12px] py-[8px] rounded-[8px] bg-[#1d77aa] border border-slate-300 text-[18px] text-richblack-900 font-medium'>
                    Sign up with Google
                </button>
            </div>
        </form>
    );
}

export default CustomerRegister;
