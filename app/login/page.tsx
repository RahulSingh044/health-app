import React from 'react'
import WaterWave from './water-wave'
import LoginForm from './loginform'

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col justify-center items-center p-4 relative overflow-hidden">
      <WaterWave />
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden z-10">
        <div className="bg-blue-600 p-4">
          <h1 className="text-2xl font-bold text-white text-center">Logo</h1>
        </div>
        <div className="p-6">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
