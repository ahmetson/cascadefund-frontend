import React, { useState } from 'react'
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
  label: string | React.ReactNode,
  href?: string,
  key: string,
  content: React.ReactNode
  className?: string
}

interface Props {
  id: string
  activeTab: string
  tabs: TabProps[]
}

const C: React.FC<Props> = ({ activeTab: initialTab, tabs, id }) => {
  const [activeTab, setTab] = useState<string | undefined>(initialTab);
  const baseClassName = "flex-1 rounded-md hover:bg-accent/50 rounded-b-none hover:border-b-2 hover:border-blue-500 hover:shadow-md"

  return (
    <Tabs
      onValueChange={setTab}
      value={activeTab as any} className="relative mb-6 bg-blue-100 text-gray-700 py-1">
      <TabsHighlight className="">
        <TabsList className="h-10 inline-flex p-1 px-4 pb-0 w-full ">
          {tabs.map((tab) =>
            <TabsHighlightItem key={tab.key} value={tab.key} className={baseClassName + (activeTab === tab.key ? ' bg-white shadow-sm shadow-b-none' : 'bg-blue-100 border-b-2 border-blue-300')}>
              <TabsTrigger
                value={tab.key}
                className={"hyperlink h-full leading-0 w-full text-sm text-blue-500 cursor-pointer " + (tab.className || '')}
              >
                {tab.label}
              </TabsTrigger>
            </TabsHighlightItem>
          )}
        </TabsList>
      </TabsHighlight>
      <TabsContents
        className="bg-white p-3 h-80 mx-4 mb-3 mt-0"
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

export default C
