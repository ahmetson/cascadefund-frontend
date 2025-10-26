import React from 'react'
import Tabs, { TabProps } from '../Tabs'
import IssueListPanel from '../issue/IssueListPanel'
import DropTarget from '../DropTarget'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const C: React.FC = () => {
  const tabs: TabProps[] = [
    {
      label: <>Public</>,
      key: "public-issues",
      content: <DndProvider backend={HTML5Backend}>
        <IssueListPanel title={'Public Issues'} draggable={true} />
      </DndProvider>
    },
    {
      label: <>Funded</>,
      key: "funded-issues",
      className: 'bg-teal-200 hover:bg-teal-400 ',
      content: <DndProvider backend={HTML5Backend}>
        <IssueListPanel title={'Funded Issues'} draggable={true} />
      </DndProvider>,
    },
    {
      label: <DndProvider backend={HTML5Backend}><DropTarget id="detailize-list" accept={["issue"]} onDrop={(e) => console.log(e)}>Detailize</DropTarget></DndProvider>,
      key: "detailize",
      content: <DndProvider backend={HTML5Backend}>
        <IssueListPanel title={'Detailize Issues'} draggable={true} />
      </DndProvider>,
      className: ' p-0!',
    },
    {
      label: <DndProvider backend={HTML5Backend}><DropTarget id="hard-list" accept={["issue"]} onDrop={(e) => console.log(e)}>Heavy</DropTarget></DndProvider>,
      key: "hard",
      content: <DndProvider backend={HTML5Backend}>
        <IssueListPanel title={'Heavy Issues'} draggable={true} />
      </DndProvider>
    },
    {
      label: <DndProvider backend={HTML5Backend}><DropTarget id="closed-list" accept={["issue"]} onDrop={(e) => console.log(e)}>Closed</DropTarget></DndProvider>,
      key: "closed",
      content: <IssueListPanel title={'Closed Issues'} />
    },
  ]

  return (
    <Tabs id="work" activeTab='funded-issues' tabs={tabs} />
  )
}

export default C
