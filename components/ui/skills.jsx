import React from 'react'
import { Code, Cpu, BarChart3, Database } from 'lucide-react'
import { SiCplusplus, SiPandas } from 'react-icons/si'
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi'
import { IoBarChartSharp } from 'react-icons/io5'
import LeftScroll from './leftscroll'

// Icon variety (for Business Analytics relevance)
import { FaPython, FaDatabase, FaRProject, FaChartLine, FaChartBar, FaChartPie, FaBalanceScale, FaCalculator, FaBusinessTime } from 'react-icons/fa'
import { MdInsights, MdQueryStats } from 'react-icons/md'
import { TbMathFunction, TbChartDots } from 'react-icons/tb'

const Skills = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      icon: <Code className="w-6 h-6 text-teal-400" />,
      items: [
        { name: "Python", icon: <FaPython /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "R", icon: <FaRProject /> },
        { name: "C++", icon: <SiCplusplus /> },
      ],
    },
    {
      category: "Data Analysis & Modeling",
      icon: <Cpu className="w-6 h-6 text-teal-400" />,
      items: [
        { name: "Pandas", icon: <SiPandas /> },
        { name: "NumPy", icon: <TbMathFunction /> },
        { name: "Exploratory Data Analysis", icon: <TbChartDots /> },
        { name: "Regression Analysis", icon: <FaChartLine /> },
      ],
    },
    {
      category: "Analytics & Visualization",
      icon: <BarChart3 className="w-6 h-6 text-teal-400" />,
      items: [
        { name: "Power BI", icon: <FaChartBar /> },
        { name: "Tableau", icon: <FaChartPie /> },
        { name: "Excel", icon: <PiMicrosoftExcelLogoFill /> },
        { name: "Dashboard Design", icon: <MdInsights /> },
      ],
    },
    {
      category: "Economics & Business Analysis",
      icon: <Database className="w-6 h-6 text-teal-400" />,
      items: [
        { name: "A/B Testing", icon: <TbChartDots /> },
        { name: "Forecasting", icon: <MdQueryStats /> },
        { name: "Decision Support", icon: <FaBalanceScale /> },
        { name: "Business Insights", icon: <FaBusinessTime /> },
      ],
    },
  ]

  return (
    <div className="min-h-screen pt-24 flex flex-col items-start max-w-7xl mx-auto p-6 lg:px-36 relative overflow-hidden">
      <div className="hidden lg:block">
        <LeftScroll to="#projects" />
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-left mb-10 text-white">
        Skills
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {skillsData.map((skillCategory, index) => (
          <div
            key={index}
            className="p-6 bg-neutral-900/70 backdrop-blur border border-white/10 rounded-2xl hover:border-teal-400/60 transition-all duration-200 h-full shadow-sm hover:shadow-[0_0_24px_rgba(45,212,191,0.10)]"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-white/5 border border-white/10 text-teal-300">
                  {skillCategory.icon}
                </div>
                <h3 className="text-white text-xl font-semibold tracking-tight">
                  {skillCategory.category}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                {skillCategory.items.map((item, idx) => (
                  <div key={idx} className="group flex flex-col items-center gap-2">
                    <div
                      className="
                        flex items-center justify-center
                        w-12 h-12 rounded-2xl
                        bg-white/5 border border-white/10
                        transition-all duration-200
                        group-hover:bg-white/10
                        group-hover:border-teal-400/50
                        group-hover:shadow-[0_0_18px_rgba(45,212,191,0.18)]
                        group-hover:-translate-y-1
                      "
                    >
                      <div className="text-[20px] text-white/75 group-hover:text-teal-300 transition-colors duration-200">
                        {item.icon}
                      </div>
                    </div>

                    <span className="text-[11px] tracking-wide text-white/55 group-hover:text-white/80 transition-colors duration-200 text-center leading-tight">
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




