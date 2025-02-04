"use client"
import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";
import { ArrowRight } from 'lucide-react';
import { Provider } from "react-redux";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="h-4/5 overflow-hidden">
        <img className="brightness-50 absolute w-full h-full " src="/images/home-bg.jpg" alt="" />
        <div className="h-screen relative z-10 flex flex-col justify-center px-28">
          <h1 className="text-7xl font-bold w-4/5 text-white mt-20">Transforming Lives Through Excellence in Healthcare</h1>
          <p className="text-white text-sm mt-6">We are committed to providing exceptional patient care and promoting wellness in our community.</p>
          <button className="text-white font-semibold bg-blue-500 py-2 w-1/6 rounded-lg mt-8">
            Book an appointment
          </button>
        </div>
      </div>

      <div className="w-screen grid grid-cols-3 p-24 px-40">

        <div className="flex flex-col gap-4 text-left border-2 border-black rounded w-4/5 p-10">
          <span className="border-blue-600  border-t-2 w-1/12"></span>
          <h1 className="font-bold text-2xl">Find a Doctor</h1>
          <p>Discover exceptional healthcare professionals at General Hospital; access licensed physicians in various medical fields.</p>
          <div className="w-full flex gap-2 text-blue-700">
            <span className=" font lg">Doctor Schedule </span>
            <ArrowRight />
          </div>
        </div>

        <div className="flex flex-col gap-4 text-left border-2 border-black rounded w-4/5 p-10">
          <span className="border-blue-600  border-t-2 w-1/12"></span>
          <h1 className="font-bold text-2xl">Make an Appointment</h1>
          <p>Schedule an appointment with our top medical professionals at General Hospital through our online booking service.</p>
          <div className="w-full flex gap-2 text-blue-700">
            <span className=" font lg">Contact us </span>
            <ArrowRight />
          </div>
        </div>

        <div className="flex flex-col gap-4 text-left border-2 border-black rounded w-4/5 p-10">
          <span className="border-blue-600  border-t-2 w-1/12"></span>
          <h1 className="font-bold text-2xl">Find a Condition</h1>
          <p>Explore a range of conditions with our comprehensive guide to common illnesses and injuries, available at General Hospital</p>
          <div className="w-full flex gap-2 text-blue-700">
            <span className=" font lg">Need help? </span>
            <ArrowRight />
          </div>
        </div>
      </div>

      <div className="w-screen bg-blue-100 pb-10">
        <div className="w-full p-12 flex flex-col justify-center items-center py-20">
          <div className="w-2/3 text-center flex flex-col gap-5 py-10">
          <span>About us</span>
          <h1 className="text-6xl text-slate-900 font-bold">We always delivers expertise and compassion in every interaction.</h1>
          </div>
          <div className="w-full grid grid-cols-2 gap-10 px-28">
            <div>
                <img className="rounded-lg" src="/images/aboutus.jpg" alt="" />
            </div>
            <div className="py-20 flex flex-col gap-5 mb-10"> 
              <h1 className="text-2xl font-bold">Experience exceptional medical care at the General Hospital, a luxury hotel designed to provide comfortable and personalized healthcare services to its guests.</h1>
              <p className="text-slate-600 text-lg">General Hospital is a luxury medical facility that provides top-notch medical care to its patients. With state-of-the-art technologies and experienced medical professionals, we offer personalized treatment options for all kinds of medical conditions. Our facility is equipped with comfortable and spacious rooms.</p>
              <p className="text-slate-600 text-lg">"Experience top-notch medical care at General Hospital, where our expert team of doctors and modern facilities ensure your well-being. Rest easy in our luxurious accommodations and ease your worries."</p>
              <button className="w-1/5 bg-transparent text-blue-700 border-2 border-blue-700 py-2 px-4">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
