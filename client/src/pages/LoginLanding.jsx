import React from 'react';
import { Link } from 'react-router-dom';
import LoginLeftSide from '../components/LoginLeftSide';

const LoginLanding = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
      <LoginLeftSide />

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 min-h-screen bg-white">
        <div className="w-full max-w-md animate-fade-in">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-4xl font-medium text-slate-800 tracking-tight mb-3">Welcome Back</h2>
            <p className="text-slate-600 text-lg">Select your portal to continue</p>
          </div>

          <div className="space-y-4 pt-6">
            <Link
              to="/login/admin"
              className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-3 inline-flex rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 px-3 py-1 text-xs font-medium text-white">
                Admin Portal
              </div>
              <p className="text-sm text-slate-600">Manage employees, attendance, payroll and company settings.</p>
            </Link>

            <Link
              to="/login/employee"
              className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-3 inline-flex rounded-full bg-gradient-to-r from-slate-700 to-slate-600 px-3 py-1 text-xs font-medium text-white">
                Employee Portal
              </div>
              <p className="text-sm text-slate-600">View your profile, attendance, leave and payslips.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLanding;