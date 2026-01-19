import React from 'react'
import { Building2, Calendar, MapPin, GraduationCap } from 'lucide-react'
import LeftScroll from './leftscroll'

const Experience = () => {
  const experiences = [
    {
      company: "IQVIA",
      role: "Data Analyst Intern – AIML Engineering",
      location: "Bangalore, IND",
      period: "May 2023 – August 2023",
      type: "work" // Added to toggle icons
    },
    {
      company: "Whittier College", 
      role: "Undergraduate Research Fellow", 
      location: "Whittier, CA",
      period: "May 2024 – April 2025",
      type: "edu"
    },
    {
      company: "Whittier College – Office of Institutional Effectiveness", 
      role: "Data Analyst Intern", 
      location: "Whittier, CA", 
      period: "August 2023 – April 2025",
      type: "edu"
    }
  ];

  return (
    <div className='min-h-screen pt-24 flex flex-col items-start max-w-7xl mx-auto p-6 lg:px-36 relative overflow-hidden'>
      <div className="hidden lg:block">
        <LeftScroll to='#skills'/> 
      </div>

      <h1 className='text-4xl md:text-6xl font-bold text-left mb-10 text-white tracking-tight'>
        Experience
      </h1>
      
      <div className='flex flex-col gap-6 w-full pb-20'>
        {experiences.map((exp, index) => (
          <div key={index} className='group relative p-8 bg-neutral-900/50 border border-neutral-800 rounded-2xl hover:border-teal-500/50 hover:bg-neutral-900 transition-all duration-300 shadow-sm'>
            <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
              <div>
                <h3 className='text-2xl font-bold text-white group-hover:text-teal-400 transition-colors'>
                  {exp.role}
                </h3>
                
                <div className='flex items-center gap-2 text-gray-400 font-medium mt-2'>
                  {/* Dynamic Icon: Building for IQVIA, Cap for College */}
                  {exp.type === "work" ? (
                    <Building2 className='w-4 h-4 text-teal-500' />
                  ) : (
                    <GraduationCap className='w-4 h-4 text-teal-500' />
                  )}
                  <span className="group-hover:text-gray-300 transition-colors">{exp.company}</span>
                </div>
              </div>
              
              <div className='flex flex-col md:items-end text-sm text-gray-500 gap-2'>
                <div className='flex items-center gap-2'>
                  <Calendar className='w-4 h-4 text-neutral-600' />
                  {exp.period}
                </div>
                <div className='flex items-center gap-2'>
                  <MapPin className='w-4 h-4 text-neutral-600' />
                  {exp.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;