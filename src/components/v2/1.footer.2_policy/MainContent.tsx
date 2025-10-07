import React from 'react'
import Sidebar from './Sidebar'
import ContentSection from './ContentSection'
import SuperpowersCard from './SuperpowersCard'

const MainContent: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col flex-row gap-8">
        <aside className="w-64 flex-shrink-0">
          <Sidebar />
        </aside>
        
        <main className="flex-1">
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-12">
            <ContentSection
              title="1. GitHub and Repos stuff"
              color="text-green-600"
              items={[
                {
                  icon: "G",
                  text: "You log in with GitHub → we grab your login info and repos."
                },
                {
                  icon: "R",
                  text: "We keep them so CascadeFund can show your projects and contributions."
                },
                {
                  icon: "E",
                  text: "Your projects are visible on the platform because we want everything out in the open."
                },
                {
                  icon: "P",
                  text: "In the future, we might use this data to recommend cool tasks and people to you."
                }
              ]}
              footer="That's it."
              footerIcon="heart"
            />

            <ContentSection
              title="2. Analytics"
              subtitle='a.k.a. "how we make CascadeFund less clunky"'
              color="text-orange-600"
              items={[
                {
                  icon: "A",
                  text: "We use Google Analytics to see what pages people visit, how long they stay, and where they click."
                },
                {
                  icon: "X",
                  text: "This helps us improve the design and user experience."
                },
                {
                  icon: "E",
                  text: "We don't use it to stalk you, sell you stuff, or anything creepy. Promise."
                }
              ]}
            />

            <ContentSection
              title="3. Money Things"
              color="text-blue-600"
              icon="💰"
              items={[
                {
                  icon: "G",
                  text: "You log in with GitHub → we grab your login info and repos."
                },
                {
                  icon: "R",
                  text: "We keep them so CascadeFund can show your projects and contributions."
                },
                {
                  icon: "E",
                  text: "Your projects are visible on the platform because we want everything out in the open."
                },
                {
                  icon: "P",
                  text: "In the future, we might use this data to recommend cool tasks and people to you."
                }
              ]}
            />

            <ContentSection
              title="4. Emails"
              color="text-purple-600"
              icon="📧"
              items={[
                {
                  icon: "H",
                  text: "We collect your email when you sign up or subscribe."
                },
                {
                  icon: "X",
                  text: "We'll only use it for the newsletters you specifically asked for."
                },
                {
                  icon: "E",
                  text: "No spam, no \"special offers,\" no selling your email to shady marketers."
                }
              ]}
            />
          </div>
        </main>

        <aside className="lg:w-80 flex-shrink-0">
          <SuperpowersCard />
        </aside>
      </div>
    </div>
  )
}

export default MainContent
