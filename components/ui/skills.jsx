import React from 'react'
import { Code, Cpu, BarChart3, Database } from 'lucide-react'
import {
  SiPython,
  SiCplusplus,
  SiMysql,
  SiTableau,
  SiSimpleanalytics,
  SiHtml5,
  SiPandas,
  SiNumpy,
  SiRstudio,
} from 'react-icons/si'
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi'
import { IoBarChartSharp } from 'react-icons/io5'
import LeftScroll from './leftscroll'

const Skills = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      icon: <Code className="w-6 h-6 text-teal-400" />,
      items: [
        { name: "Python", icon: <SiPython /> },
        { name: "SQL", icon: <SiMysql /> },
        { name: "R", icon: <SiRstudio /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "HTML", icon: <SiHtml5 /> },
      ],
    },
    {
      category: "Data Analysis & Modeling",
      icon: <Cpu className="w-6 h-6 text-teal-400" />,
      items: [
        { name: "Pandas", icon: <SiPandas /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Exploratory Data Analysis", icon: <SiSimpleanalytics /> },
        { name: "Regression Analysis", icon: <SiSimpleanalytics /> },
        { name: "Forecasting", icon: <SiSimpleanalytics /> },
      ],
    },
    {
      category: "Analytics & Visualization",
      icon: <BarChart3 className="w-6 h-6 text-teal-400" />,
      items: [
        { name: "Power BI", icon: <IoBarChartSharp /> },
        { name: "Tableau", icon: <SiTableau /> },
        { name: "Excel", icon: <PiMicrosoftExcelLogoFill /> },
        { name: "Dashboard Design", icon: <BarChart3 className="w-6 h-6" /> },
        { name: "KPI Tracking", icon: <SiSimpleanalytics /> },
      ],
    },
    {
      category: "Economics & Business Analysis",
      icon: <Database className="w-6 h-6 text-teal-400" />,
      items: [
        { name: "Econometrics", icon: <SiSimpleanalytics /> },
        { name: "A/B Testing", icon: <SiSimpleanalytics /> },
        { name: "Statistical Inference", icon: <SiSimpleanalytics /> },
        { name: "Business Insights", icon: <SiSimpleanalytics /> },
        { name: "Decision Support", icon: <SiSimpleanalytics /> },
      ],
    },
  ]

  return (
    <div className='min-h-screen pt-24 flex flex-col items-start max-w-7xl mx-auto p-6 lg:px-36 relative overflow-hidden'>
      <div className="hidden lg:block">
        <LeftScroll to='#projects' />
      </div>

      <h1 className='text-4xl md:text-6xl font-bold text-left mb-10 text-white'>
        Skills
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
        {skillsData.map((skillCategory, index) => (
          <div
            key={index}
            className='p-6 bg-neutral-900 border border-neutral-700 rounded-xl hover:border-teal-400 transition-colors h-full'
          >
            <div className='flex flex-col gap-6 mb-2'>
              <div className='flex items-center gap-3'>
                {skillCategory.icon}
                <h3 className='text-white text-xl font-bold'>
                  {skillCategory.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-6 mt-2">
                {skillCategory.items.map((item, idx) => (
                  <div key={idx} className="group flex flex-col items-center gap-3">
                    <div className="text-2xl text-gray-400 group-hover:text-teal-400 transition-colors transform group-hover:scale-110 duration-200">
                      {item.icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium group-hover:text-gray-300">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex items-center gap-3 p-3 px-5 rounded-full bg-teal-400/5 border border-teal-400/10 max-w-fit">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
        </span>
        <p className="text-xs font-medium text-teal-200 tracking-wide">
          <span className="text-white">
            Prev AI/ML Engineering Intern @ IQVIA | MSBA @ UCI
          </span>
        </p>
      </div>
    </div>
  )
}

export default Skills

