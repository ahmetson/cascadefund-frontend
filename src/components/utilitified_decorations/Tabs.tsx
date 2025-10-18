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
import { ReactNode } from '../ui/panel-effect';

export type TabProps = {
  label: string | React.ReactNode,
  href?: string,
  key: string,
  content: React.ReactNode
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
    <ReactNode id={id!}>
      <Tabs
        onValueChange={setTab}
        value={activeTab as any} className="bg-rounded-lg rounded-lg relative border-radius-lg bg-white mb-6 pt-2 pb-0">
        <TabsHighlight className="">
          <TabsList className="h-10 inline-flex p-1 pb-0 w-full ">
            {tabs.map((tab) =>
              <TabsHighlightItem key={tab.key} value={tab.key} className={baseClassName + (activeTab === tab.key ? ' bg-blue-100 border-b-2 border-blue-300  shadow-sm' : '')}>
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
    </ReactNode>
  )
}

export default C
