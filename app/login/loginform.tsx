"use client"

import { useState } from "react"
import { Lock, Mail, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { login } from "../store/slices/authsSlice"
import { setUserData } from "../store/slices/userSlice"

export default function LoginForm() {

    type LoginForm = {
        email: string,
        password: string,
        role: string
    }

    const dispatch = useDispatch()
    const router = useRouter()
    const { register, handleSubmit, formState:{errors} } = useForm<LoginForm>()
    const [showPassword, setShowPassword] = useState(false)


    const onsubmit = async (data:LoginForm) => {
        try {
            const response = await axios.post("api/auth/Login", data)
            const role = response.data.user.role
            const user = response.data.user
            console.log("login",role,user)
            if (response.data.user) {
                dispatch(login({ role: role}));
                dispatch(setUserData(user))
                toast.success("Logged in successfully")
                router.push('/dashboard')
              } else {
                console.error('Role not found in response');
              }
            
          } catch (error:any) {
            console.error(error.message)
          }
    }

    return (
        <form onSubmit={handleSubmit(onsubmit)} className="space-y-6">

            <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 pb-4">
                    Email
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="outline-none focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                        placeholder="you@example.com"
                        {...register("email")}
                    />
                </div>
            </div>

            <div>
                <label htmlFor="password" className="block text-lg font-medium text-gray-700 py-4">
                    Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        required
                        className="outline-none block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-md"
                        placeholder="••••••••"
                        {...register("password")}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                            type="button"
                            className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Sign in
                </button>
            </div>
            <div className="text-center text-sm">
                Don't have an account?{" "}
                <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                    Sign up
                </Link>
            </div>
        </form>
    )
}

