import React from 'react'
import Link from 'next/link'
import { GraduationCap, Brain, Rocket, ArrowRight, Mail } from 'lucide-react'
import RightSocials from './rightsocials'
import LeftScroll from './leftscroll'

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-start items-start pt-28 md:pt-32 pb-16 max-w-7xl mx-auto px-6 lg:px-36">
      <div className="hidden lg:block">
        <RightSocials />
        <LeftScroll to="#skills" />
      </div>

      <p className="text-teal-400 font-mono text-base md:text-xl mb-4">
        Hello, my name is
      </p>

      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
        Manasvi Vardham.
      </h1>

      <h5 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 mb-10 leading-tight">
        <span className="text-gray-200">I use data to solve real world problems.</span>
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full mb-10">
        <div className="p-6 bg-neutral-900 border border-neutral-700 rounded-xl hover:border-teal-400 transition-colors group">
          <GraduationCap className="w-8 h-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold text-white mb-2">Education</h3>
          <p className="text-gray-400 text-sm">University of California, Irvine</p>
          <p className="text-teal-400 text-sm mt-1">M.S. Business Analytics</p>
        </div>

        <div className="p-6 bg-neutral-900 border border-neutral-700 rounded-xl hover:border-teal-400 transition-colors group">
          <Brain className="w-8 h-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold text-white mb-2">Interests</h3>
          <p className="text-gray-400 text-sm">
            Transforming complex data into clear, actionable insights through dashboards and visualizations.
          </p>
        </div>

        <div className="p-6 bg-neutral-900 border border-neutral-700 rounded-xl hover:border-teal-400 transition-colors group">
          <Rocket className="w-8 h-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold text-white mb-2">Always Learning</h3>
          <p className="text-gray-400 text-sm">
            Continuously building analytical skills and applying new methods to real-world data problems!
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Link
          href="https://github.com/mvardham-jpg/Resume/blob/main/Vardham_Manasvi_Resume.pdf"
          className="inline-flex items-center gap-2 border border-white text-white py-3 px-8 rounded-xl transition-all hover:bg-white hover:text-black hover:scale-105 font-mono text-lg"
          target="_blank"
        >
          View Resume <ArrowRight size={20} />
        </Link>

        <a href="mailto:manasvivardha8@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Manasvi,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect."
            className="flex items-center gap-2 text-gray-500 hover:text-teal-400 transition-colors font-mono text-sm group px-2 py-2"
        >
        <Mail size={16} className="group-hover:animate-bounce" />
        <span>or email me directly</span>
        </a>

      </div>
    </section>
  )
}

export default Home
