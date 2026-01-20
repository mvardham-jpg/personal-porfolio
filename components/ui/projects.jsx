import React from "react"
import LeftScroll from "./leftscroll"
import { GiArtificialIntelligence, GiAtom } from "react-icons/gi"
import {
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiOpenai,
  SiSimpleanalytics
} from "react-icons/si"
import { MdOutlineAnalytics, MdFlightTakeoff, MdBarChart } from "react-icons/md"

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-start max-w-7xl mx-auto p-6 lg:px-36 pt-24 relative overflow-hidden">
      
      <div className="hidden lg:block">
        <LeftScroll to="#contact" />
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-left mb-6 text-white">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full pb-20">

        {/* Neutrino Prediction */}
        <div className="group bg-neutral-900 flex flex-col border border-neutral-700 rounded-xl hover:border-teal-400 transition-colors p-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-3">
            <GiAtom className="w-8 h-8 text-teal-400" />
            Neutrino Forecasting
          </h2>
          <p className="text-gray-400 mb-6">
            Analyzed thousands of neutrino observations, cleaned the data, and evaluated prediction accuracy to understand which signals best explain energy levels.
          </p>

          <div className="flex gap-6 border-t border-neutral-800 pt-4">
            <Icon label="Python"><SiPython /></Icon>
            <Icon label="Pandas"><SiPandas /></Icon>
            <Icon label="NumPy"><SiNumpy /></Icon>
          </div>
        </div>

        {/* Disease Detection AI */}
        <div className="group bg-neutral-900 flex flex-col border border-neutral-700 rounded-xl hover:border-teal-400 transition-colors p-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-3">
            <SiOpenai className="w-8 h-8 text-teal-400" />
            HCP Transcript Insights
          </h2>
          <p className="text-gray-400 mb-6">
            Processed medical transcripts and built a simple pipeline to extract key symptoms and themes, helping reduce time spent on manual review.
          </p>

          <div className="flex gap-6 border-t border-neutral-800 pt-4">
            <Icon label="Python"><SiPython /></Icon>
            <Icon label="GPT 4"><SiOpenai /></Icon>
            <Icon label="NLP"><GiArtificialIntelligence /></Icon>
          </div>
        </div>

        {/* Airline Segmentation */}
        <div className="group bg-neutral-900 flex flex-col border border-neutral-700 rounded-xl hover:border-teal-400 transition-colors p-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-3">
            <MdFlightTakeoff className="w-8 h-8 text-teal-400" />
            Customer Segmentation
          </h2>
          <p className="text-gray-400 mb-6">
            Cleaned booking data and clustered customers into groups based on travel behavior, then summarized each segment to support targeting decisions.
          </p>

          <div className="flex gap-6 border-t border-neutral-800 pt-4">
            <Icon label="Python"><SiPython /></Icon>
            <Icon label="Scikit Learn"><SiScikitlearn /></Icon>
            <Icon label="Clustering"><MdOutlineAnalytics /></Icon>
          </div>
        </div>

        {/* Institutional Dashboard */}
        <div className="group bg-neutral-900 flex flex-col border border-neutral-700 rounded-xl hover:border-teal-400 transition-colors p-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-3">
            <SiSimpleanalytics className="w-8 h-8 text-teal-400" />
            KPI Dashboard
          </h2>
          <p className="text-gray-400 mb-6">
            Built a Power BI dashboard to track key survey metrics, highlight trends over time, and help leadership quickly spot areas needing action.
          </p>

          <div className="flex gap-6 border-t border-neutral-800 pt-4">
            <Icon label="Analysis"><SiSimpleanalytics /></Icon>
            <Icon label="Visualization"><MdBarChart /></Icon>
          </div>
        </div>

      </div>
    </div>
  )
}

const Icon = ({ children, label }) => (
  <div className="flex flex-col items-center gap-2 text-gray-500 group-hover:text-teal-400 transition-colors">
    <div className="text-2xl">{children}</div>
    <span className="text-[10px] uppercase tracking-wider">{label}</span>
  </div>
)

export default Projects
