import { Loader2Icon, LogInIcon, LogOutIcon } from 'lucide-react'
import React, { useState } from 'react'
import api from '../../api/axios'
import toast from 'react-hot-toast'

const CheckInButton = ({todayRecord, onAction}) => {
    const [loading, setLoading] = useState(false)

    const handleAttendance = async () => {
        setLoading(true)
        try {
            await api.post("/attendance")
            onAction()
        } catch (error) {
            toast.error(error?.response?.data?.error || error?.message);
        }
        setLoading(false)
    }

    if(todayRecord?.checkOut){
        return (
            <div className='flex flex-col items-center justify-center p-8 bg-slate-50 rounded-2xl border border-slate-200'>
                <h3 className='text-lg font-bold text-slate-900'>Work Day Completed</h3>
                <p className='text-slate-500 text-sm mt-1'>Great job! See you tomorrow</p>
            </div>
        )
    }

    const isCheckedIn = !!todayRecord?.checkIn;
  return (
    <div className='card p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
        <div>
            <h3 className='text-base font-semibold text-slate-800'>Daily Attendance Action</h3>
            <p className='text-sm text-slate-500 mt-0.5'>
                {isCheckedIn 
                    ? `Checked in today at ${new Date(todayRecord.checkIn).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` 
                    : "You haven't marked your attendance yet today."}
            </p>
        </div>

        <button 
            onClick={handleAttendance} 
            disabled={loading} 
            className={`w-full sm:w-auto px-6 py-3.5 flex justify-center items-center gap-4 rounded-xl bg-linear-to-r text-white transition-all shadow-md active:scale-95 ${isCheckedIn ? "from-slate-700 to-slate-900 shadow-slate-900/20 hover:from-slate-800 hover:to-slate-950" : "from-indigo-600 to-indigo-700 shadow-indigo-600/25 hover:from-indigo-700 hover:to-indigo-800"}`}
        >
            {loading ? <Loader2Icon className="size-5 animate-spin"/> : isCheckedIn ? <LogOutIcon className="size-5"/> : <LogInIcon className="size-5"/>}

            <div className='text-left'>
                <p className='text-sm font-semibold'>{loading ? "Processing..." : isCheckedIn ? "Clock Out" : "Clock In"}</p>
                <p className='text-xs opacity-80'>{isCheckedIn ? "Click to end your shift" : "Start your work day"}</p>
            </div>
        </button>
    </div>
  )
}

export default CheckInButton