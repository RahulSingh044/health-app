"use client"

import { useState } from "react"
import { User, Mail, Lock, Eye, EyeOff, UserPlus,Phone} from "lucide-react"
import Link from "next/link"
import { z } from "zod"
import axios from "axios"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export default function SignupForm() {

  const router = useRouter();

  const formSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    mobileNo: z.string().min(10, "Mobile number should be of 10 digit").max(10, "Mobile number should be of 10 digit"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    role: z.enum(["doctor", "patient"]),
  })

  type FormData = z.infer<typeof formSchema>;

  const [showPassword, setShowPassword] = useState(false)

  const { register, handleSubmit, formState: {errors} } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onsubmit = async (data: FormData) => {
    try {
      const request = await axios.post("api/auth/Signup", data)
      toast.success("Signup successful")
      router.push("/")
    } catch (error:any) {
      console.error(error.message)
    }
  }


  return (
    <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <div className="mt-1 relative rounded-md shadow-sm py-3">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="name"
            type="text"
            required
            {...register("name")}
            className="outline-none block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
            placeholder="John Doe"
          />
        </div>
        {errors.name && <p className="text-red-500 text-xs py-2 px-3">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <div className="mt-1 relative rounded-md shadow-sm py-3">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="mobileNo"
            type="text"
            required
            {...register("mobileNo")}
            className="outline-none block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
            placeholder=""
          />
        </div>
        {errors.mobileNo && <p className="text-red-500 text-xs py-2 px-3">{errors.mobileNo.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div className="mt-1 relative rounded-md shadow-sm py-3">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            {...register("email")}
            className="outline-none block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
            placeholder="you@example.com"
          />
        </div>
        {errors.email && <p className="text-red-500 text-xs py-2 px-3">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="mt-1 relative rounded-md shadow-sm py-3">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            required
            {...register("password")}
            className="outline-none focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-md"
            placeholder="••••••••"
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
        {errors.password && <p className="text-red-500 text-xs py-2 px-3">{errors.password.message}</p>}
      </div>

      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
          Role
        </label>
        <select
          id="role"
          {...register("role")}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          required
        >
          <option value="">Select a role</option>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <UserPlus className="h-5 w-5 mr-2" />
          Sign up
        </button>
      </div>

      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
          Log in
        </Link>
      </div>
    </form>
  )
}

