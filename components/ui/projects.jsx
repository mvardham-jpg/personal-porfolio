import React from 'react'
import LeftScroll from './leftscroll' 
import { GiCycle, GiArtificialIntelligence, GiAtom } from "react-icons/gi";
import { SiPytorch, SiPython, SiPandas, SiNumpy, SiFastapi, SiMongodb, SiNextdotjs, SiTailwindcss, SiScikitlearn, SiOpenai, SiSimpleanalytics } from "react-icons/si";
import { MdOutlineAnalytics, MdFlightTakeoff, MdBarChart } from "react-icons/md";
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <div className='min-h-screen flex flex-col items-start max-w-7xl mx-auto p-6 lg:px-36 pt-24 relative overflow-hidden'>
      <div className="hidden lg:block">
        <LeftScroll to='#contact'/>
      </div>

      <h1 className='text-4xl md:text-6xl font-bold text-left mb-4 text-white'>My Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 w-full pb-20'>

        {/* Neutrino Energy Prediction Project */}
        <div className='relative group bg-neutral-900 flex flex-col border border-neutral-700 rounded-xl hover:border-teal-400 transition-colors p-6 h-full'>
          <div className='mb-4'>
            <h2 className='text-2xl font-bold text-white flex items-center gap-3'>
              <GiAtom className="w-8 h-8 text-teal-400 flex-shrink-0"/> 
              Neutrino Prediction
            </h2>
          </div>
          <div className='flex-grow'>
            <p className='text-gray-400 mb-6 leading-relaxed'>
              Developed a simulation framework evaluating energy prediction accuracy across thousands of neutrino observations using statistical modeling.
            </p>
          </div>
          
          <div className='flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-neutral-800'>
            <div className='flex flex-col items-center gap-2'>
              <SiPython className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>Python</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <SiPandas className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>Pandas</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <SiNumpy className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>Numpy</span>
            </div>
          </div>
        </div>
      
        {/* IQVIA Disease Detection Chatbot */}
        <div className='relative group bg-neutral-900 flex flex-col border border-neutral-700 rounded-xl hover:border-teal-400 transition-colors p-6 h-full'>
          <div className='mb-4'>
            <h2 className='text-2xl font-bold text-white flex items-center gap-3'>
              <SiOpenai className="w-8 h-8 text-teal-400 flex-shrink-0"/>
              Disease Detection AI
            </h2>
          </div>
          <div className='flex-grow'>
            <p className='text-gray-400 mb-6 leading-relaxed'>
              Built a 99% accurate GPT-4 chatbot and automated transcript analysis, reducing manual labor by 43%.
            </p>
          </div>
          
          <div className='flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-neutral-800'>
            <div className='flex flex-col items-center gap-2'>
              <SiPython className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>Python</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <SiOpenai className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>GPT-4</span>
            </div>
             <div className='flex flex-col items-center gap-2'>
              <GiArtificialIntelligence className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>NLP</span>
            </div>
          </div>
        </div>

        {/* Sun Country Airline Segmentation */}
        <div className='relative group bg-neutral-900 flex flex-col border border-neutral-700 rounded-xl hover:border-teal-400 transition-colors p-6 h-full'>
          <div className='mb-4'>
            <h2 className='text-2xl font-bold text-white flex items-center gap-3'>
              <MdFlightTakeoff className="w-8 h-8 text-teal-400 flex-shrink-0"/>
              Airline Segmentation
            </h2>
          </div>
          <div className='flex-grow'>
            <p className='text-gray-400 mb-6 leading-relaxed'>
              Applied K-Means clustering on 90+ booking features to segment airline customers and generate targeted marketing strategies.
            </p>
          </div>
          
          <div className='flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-neutral-800'>
            <div className='flex flex-col items-center gap-2'>
              <SiPython className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>Python</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <SiScikitlearn className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>Scikit-Learn</span>
            </div>
             <div className='flex flex-col items-center gap-2'>
              <MdOutlineAnalytics className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>Clustering</span>
            </div>
          </div>
        </div>

        {/* NSSE Dashboard Project */}
        <div className='relative group bg-neutral-900 flex flex-col border border-neutral-700 rounded-xl hover:border-teal-400 transition-colors p-6 h-full'>
          <div className='mb-4'>
            <h2 className='text-2xl font-bold text-white flex items-center gap-3'>
              <SiSimpleanalytics className='w-8 h-8 text-teal-400 flex-shrink-0'/>
              Institutional Dashboard
            </h2>
          </div>
          <div className='flex-grow'>
            <p className='text-gray-400 mb-6 leading-relaxed'>
              Engineered a Power BI dashboard transforming survey data into actionable visualizations for university administrative decision-making.
            </p>
          </div>
           <div className='flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-neutral-800'>
            <div className='flex flex-col items-center gap-2'>
              <SiSimpleanalytics className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>Analysis</span>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <MdBarChart className='text-2xl text-gray-500 group-hover:text-teal-400 transition-colors'/>
              <span className='text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300'>Visualization</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects