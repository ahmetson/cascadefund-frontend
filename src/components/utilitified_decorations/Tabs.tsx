import React from 'react'
import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsHighlight,
  TabsHighlightItem,
  TabsList,
  TabsTrigger,
} from '@/components/animate-ui/primitives/animate/tabs';

export type TabProps = {
  label: string,
  href?: string,
  key: string,
  content: React.ReactNode
}

interface CworkTabProps {
  activeTab: string
  tabs: TabProps[]
}

const CworkTab: React.FC<CworkTabProps> = ({ activeTab, tabs }) => {
  return (
    <Tabs defaultValue={activeTab} className="bg-rounded-lg relative border-radius-lg bg-white mb-6 pt-2 pb-0">
      <TabsHighlight className="">
        <TabsList className="h-10 inline-flex p-1 pb-0 w-full">
          {tabs.map((tab) =>
            <TabsHighlightItem key={tab.key} value={tab.key} className="flex-1 hover:bg-accent/50 data-[state=active]:bg-background data-[state=active]:shadow">
              <TabsTrigger
                value={tab.key}
                className="h-full px-4 py-2 leading-0 w-full text-sm "
              >
                {tab.label}
              </TabsTrigger>
            </TabsHighlightItem>
          )}
        </TabsList>
      </TabsHighlight>
      <TabsContents
        className="bg-background p-3 h-80"
      >
        {tabs.map((tab) =>
          <TabsContent value={tab.key} className="space-y-4">
            {tab.content}
          </TabsContent>
        )}
      </TabsContents>
    </Tabs>
  )
}

export default CworkTab
