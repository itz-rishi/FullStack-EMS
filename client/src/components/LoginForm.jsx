import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({ role, title, subtitle }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
      <div className="hidden md:flex w-1/2 bg-indigo-950 relative overflow-hidden border-r border-slate-200">
        <div className="absolute -top-30 -left-30 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col items-start justify-center p-12 lg:p-20 w-full h-full">
          <h1 className="text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight tracking-tight">
            Employee <br /> Management System
          </h1>
          <p className="text-slate-300 text-lg max-w-md leading-relaxed">
            Streamline your workforce operations, track attendance, manage payroll, and empower your team securely.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 min-h-screen bg-white relative">
        <div className="w-full max-w-md">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 mb-8 text-sm font-medium"
          >
            <span aria-hidden="true">←</span>
            <span>Back to portals</span>
          </Link>

          <div className="mb-8">
            <h2 className="text-3xl font-medium text-slate-800 tracking-tight mb-2">{title}</h2>
            <p className="text-slate-600">{subtitle}</p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                {role === 'admin' ? 'Admin Email' : 'Employee Email'}
              </label>
              <input type="email" placeholder="you@example.com" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
              <input type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} required className="pr-11" placeholder="********" />
            </div>

            <button type="submit" className="btn-primary w-full mt-2">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;