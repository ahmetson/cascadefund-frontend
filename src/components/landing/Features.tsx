"use client"

import * as React from 'react'
import { motion } from 'framer-motion'
import { Shield, Clock, Users, Target, Github, GitBranch, Code, Terminal } from 'lucide-react'
import PreviewContainer from './PreviewContainer'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

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
  return (
    <section id="features" className="py-24 relative">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-teal-400">&gt;</span> Key Features &
            <br />
            <span className="gradient-text">Benefits</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Efficiency Through Paywalls",
              description: "Gamified paywall system filters out noise while making participation meaningful and rewarding.",
              platform: "github",
              status: "active"
            },
            {
              icon: <Clock className="w-6 h-6" />,
              title: "Time-Saved Management",
              description: "Reduce project management to just 10 minutes of daily guided task completion.",
              platform: "bitbucket",
              status: "pending"
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Collaborative Rating",
              description: "Rating system that reflects how you work with others and on which types of projects.",
              platform: "gitlab",
              status: "review"
            },
            {
              icon: <Target className="w-6 h-6" />,
              title: "Quest System",
              description: "Turn all activities into quest tasks that contribute to your collaborative rating.",
              platform: "stackoverflow",
              status: "merged"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`github-card platform-${feature.platform} h-full`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="text-green-400">
                      {feature.icon}
                    </div>
                    <div className={`w-2 h-2 rounded-full ${feature.status === 'active' ? 'bg-green-400' :
                      feature.status === 'pending' ? 'bg-yellow-400' :
                        feature.status === 'review' ? 'bg-blue-400' :
                          'bg-purple-400'
                      }`}></div>
                  </div>
                  <span className="font-mono text-xs text-gray-500">
                    #{index + 1}
                  </span>
                </div>
                <h3 className="font-mono text-lg font-semibold text-gray-600 dark:text-gray-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-mono leading-relaxed mb-4">
                  <span className="text-gray-600">// </span>{feature.description}
                </p>
                <div className="flex items-center justify-between text-xs font-mono text-gray-600 dark:text-gray-400">
                  <span>Status: {feature.status}</span>
                  <div className="flex items-center space-x-1">
                    <GitBranch className="w-3 h-3" />
                    <span>main</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8"
        >

          <div className="lg:col-span-2">
            <h3 className="font-mono text-xl font-bold text-gray-600 dark:text-gray-100 mb-4 flex items-center">
              <Terminal className="w-5 h-5 mr-2 text-green-400" />
              Screenshot Previews
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 font-mono text-sm">
              <span className="text-gray-600">// </span>Get a glimpse of the CascadeFund interface
            </p>
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
              <p className="text-gray-400 font-mono text-sm">
                <span className="text-gray-600">// </span>preview {current} of {count}
              </p>
            </div>
          </div>

          <div className="github-card sm:ml-0 md:ml-8 sm:mt-0 md:mt-22">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-mono text-sm text-gray-600 dark:text-gray-100">Repositories</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 font-mono text-sm">
              <span className="text-gray-600/90 dark:text-gray-400/90">// </span>Interactive demos and detailed feature previews will be available as we approach our launch date.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 font-mono text-sm">
              <span className="text-gray-600/90 dark:text-gray-400/90">// </span>For now, here is our source codes.
            </p>
            <a
              href="https://github.com/ara-foundation/cascadefund-frontend"
              className="inline-flex items-center text-green-400 font-mono text-sm hover:text-green-300 transition-colors group"
            >
              <Github className="w-5 h-5 text-green-400 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span>CascadeFund Frontend</span>
              <GitBranch className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://github.com/ara-foundation/cascadefund-smartcontracts"
              className="inline-flex items-center text-green-400 font-mono text-sm hover:text-green-300 transition-colors group"
            >
              <Github className="w-5 h-5 text-green-400 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span>CascadeFund Smartcontracts</span>
              <GitBranch className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <span className="text-teal-400 font-mono text-sm">CascadeFund Backend coming soon</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
