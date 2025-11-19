"use client"

import * as React from 'react'
import { motion } from 'framer-motion'
import { Github, GitBranch, GlassesIcon as Globe2, Globe } from 'lucide-react'
import PreviewContainer from './PreviewContainer'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Link from '../custom-ui/Link'
import { getIcon } from '../icon'

const Features = () => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const linkClassName = "w-full inline-flex items-center text-green-600 font-mono text-sm hover:text-green-300 transition-colors group"

  return (
    <section id="features" className="py-18 relative">
      <div className="section-padding max-w-7xl mx-auto">
        <h2 className="font-mono text-5xl font-bold text-gray-600 dark:text-gray-400 mb-4 flex items-center justify-center">
          <Globe2 className="w-12 h-12 mr-6 text-slate-900 dark:text-slate-500 " />
          Demo Previews
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8"
        >

          <div className="lg:col-span-2">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {[
                  {
                    image: "/preview/quest.gif",
                    url: "/maintainer/cwork",
                    type: "GIF"
                  },
                  {
                    image: "/preview/explore.gif",
                    url: "/data/issue",
                    type: "GIF"
                  },
                  {
                    image: "/preview/maintainer-balance.png",
                    url: "/maintainer/balance"
                  },
                  {
                    image: "/preview/maintainer-cbalance.png",
                    url: "/maintainer/cbalance"
                  },
                  {
                    image: "/preview/profile.png",
                    url: "/data/profile"
                  },
                  {
                    image: "/preview/maintainer-work.png",
                    url: "/maintainer/work"
                  }
                ].map((preview, index) => (
                  <CarouselItem key={index}>
                    <PreviewContainer previewUrl={preview.url}>
                      <div className="relative">
                        <img

                          src={preview.image}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-auto rounded "
                        />
                        {preview.type && (
                          <span className="absolute top-2 right-2 bg-green-500/80 text-white text-xs font-mono px-2 py-1 rounded">
                            {preview.type}
                          </span>
                        )}
                      </div>
                    </PreviewContainer>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="text-center mt-4">
              <p className="text-gray-600 dark:text-slate-500 font-mono text-sm">
                Slide <span className="text-gray-600 dark:text-slate-500 font-bold">{current}</span><span className='mx-1'>/</span><span className="text-gray-600 dark:text-slate-500 font-bold">{count}</span>
              </p>
            </div>
          </div>

          <div className="sm:ml-0 md:ml-8">
            <Link
              asNewTab={true}
              uri="https://app.cascadefund.org/"
              className={linkClassName}
            >
              <Globe2
                className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
              />
              <span className="">Demo App</span>
              <Globe
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              asNewTab={true}
              uri="https://github.com/ara-foundation/cascadefund-app"
              className={linkClassName}
            >
              <Github
                className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
              />
              <span>App Source Code</span>
              <GitBranch
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              asNewTab={true}
              uri="https://github.com/ara-foundation/cascadefund-smartcontracts"
              className={linkClassName}
            >
              <Github
                className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
              />
              <span>Smartcontracts</span>
              <GitBranch
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <span className="text-gray-500 dark:text-gray-400/80 font-mono text-sm flex"
            >
              {getIcon({ iconType: 'clock', className: 'w-4 h-4 mr-2' })}
              Backend Source Code Coming Soon
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
