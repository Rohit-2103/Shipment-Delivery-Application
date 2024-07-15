import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";
import { db } from "../../Firebase/FirebaseConfig";

const Login = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const [showPassword, setShowPassword] = useState(false);

    async function submitHandler(event) {
        event.preventDefault();
        const Email = formData.email;
        const Password = formData.password;

        try {
            const userCredential = await signInWithEmailAndPassword(db, Email, Password, {
                persistence: browserSessionPersistence,
            });

            const user = userCredential.user;
            const userId = user.uid;

            setIsLoggedIn(true);
            toast.success("Login Successful!");
            console.log(userId);
            navigate("/dashboard", { state: userId });
        } catch (error) {
            console.error("Login Error:", error);
            toast.error("Wrong Credentials!");
            navigate("/login");
        }
    }

    return (
        <form onSubmit={submitHandler} className="flex flex-col items-center justify-center gap-4 mt-10">
            <h2 className="text-3xl text-gray-800 mb-4 underline">Customer Sign in</h2>
            <label className="flex flex-col gap-2 w-full max-w-sm">
                <p className="text-base text-gray-700">
                    Email Address <sup className="text-red-700">*</sup>
                </p>

                <input
                    autoComplete="off"
                    type="email"
                    placeholder="Enter Email address"
                    required
                    value={formData.email}
                    onChange={changeHandler}
                    name="email"
                    className="px-4 py-3 rounded-lg text-lg text-gray-800 bg-gray-200 border-none shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </label>

            <label className="flex flex-col gap-2 w-full max-w-sm relative">
                <p className="text-base text-gray-700">
                    Password <sup className="text-red-700">*</sup>
                </p>

                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    required
                    value={formData.password}
                    onChange={changeHandler}
                    name="password"
                    className="px-4 py-3 rounded-lg text-lg text-gray-800 bg-gray-200 border-none shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <span
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                    {showPassword ? (
                        <AiOutlineEyeInvisible className="text-gray-700" />
                    ) : (
                        <AiOutlineEye className="text-gray-700" />
                    )}
                </span>

                <Link to="#">
                    <p className="absolute right-4 bottom-[-20px] text-gray-700 underline">
                        Forgot Password
                    </p>
                </Link>
            </label>

            <button className="px-6 py-3 rounded-lg bg-blue-500 text-lg text-white font-medium mt-4 shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Sign in
            </button>
        </form>
    );
};

export default Login;
