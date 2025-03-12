import React from 'react'

function About() {
  return (
    <div className="min-h-screen py-5 relative overflow-hidden bg-gradient-to-br from-[#1a1c2c] via-[#4b1248] to-[#1a1c2c]">
      <div className="absolute inset-0 bg-radial-gradient animate-pulse-slow opacity-30" />
      
      <div className="max-w-7xl mx-auto p-10 text-white bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl relative z-10">
        <h1 className="text-3xl mb-8 text-center font-bold bg-gradient-to-r from-red-500/70 to-purple-600/50 p-3 rounded-lg animate-glow">
          About Hot News
        </h1>
        
        <div className="flex gap-10 items-center flex-wrap">
          <img 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3"
            alt="News Concept"
            className="max-w-[500px] w-full rounded-lg shadow-lg"
          />
          
          <div className="flex-1 min-w-[300px]">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-500/70 to-purple-600/50 p-4 rounded-lg">
              Your Source for Breaking News
            </h2>
            
            <p className="text-lg leading-8 mb-5">
              Welcome to Hot News, your premier destination for the latest and most important news stories from around the globe. We pride ourselves on delivering accurate, timely, and comprehensive news coverage across various categories including politics, technology, business, entertainment, and more.
            </p>
            
            <p className="text-lg leading-8 mb-5">
              Our team of dedicated journalists and editors work around the clock to bring you breaking news as it happens. We believe in the power of well-researched, unbiased reporting to keep our readers informed and engaged with the world around them.
            </p>
            
            <div className="flex justify-between mt-10 text-center">
              <div>
                <h3 className="text-4xl text-red-500 font-bold">1M+</h3>
                <p>Daily Readers</p>
              </div>
              <div>
                <h3 className="text-4xl text-red-500 font-bold">50+</h3>
                <p>Countries Covered</p>
              </div>
              <div>
                <h3 className="text-4xl text-red-500 font-bold">24/7</h3>
                <p>News Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
