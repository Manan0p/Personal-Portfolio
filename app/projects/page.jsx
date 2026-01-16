import { Home } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
      <section className="relative w-full overflow-hidden pt-12 md:pt-20 lg:pt-24 pb-0 bg-gradient-to-br from-[#0c0f1c] via-[#0a0d18] to-[#070912] border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-5 pt-4">
              <div className="text-sm md:text-md lg:text-lg text-muted-foreground tracking-wide">
                <Home className="inline mb-1 mr-1 h-4 w-4"/>
                Home / Projects
              </div>
              <h2 className="font-medium text-violet-100 tracking-normal text-left text-4xl md:text-5xl lg:text-6xl leading-[1.1] md:leading-[1.1] lg:leading-[1.1]">
                Projects
              </h2>
              <div className="text-md text-violet-100 md:text-lg lg:text-xl mb-10 text-muted-foreground tracking-wide">
                Real-world products I've designed and built
              </div>
            </div>
          </div>  
        </div>
      </section>
      
    </div>
  )
}

export default page