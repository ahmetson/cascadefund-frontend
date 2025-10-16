import React from 'react'
import Tabs, { TabProps } from '../utilitified_decorations/Tabs'
import IssueListPanel from './IssueListPanel'
import IssueListPanel2 from './IssueListPanel2'
import Badge from '../Badge'
import DropTarget from '../DropTarget'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const C: React.FC = () => {
  const tabs: TabProps[] = [
    {
      label: <>Issues <Badge variant='blue'>20k</Badge></>,
      key: "issues",
      content: <IssueListPanel />
    },
    {
      label: <DndProvider backend={HTML5Backend}><DropTarget id="hard-list" accept={["issue"]} onDrop={(e) => console.log(e)}>Hard</DropTarget></DndProvider>,
      key: "hard",
      content: <IssueListPanel2 />
    },
    {
      label: <DndProvider backend={HTML5Backend}><DropTarget id="closed-list" accept={["issue"]} onDrop={(e) => console.log(e)}>Closed</DropTarget></DndProvider>,
      key: "closed",
      content: <IssueListPanel />
    },
    {
      label: <DndProvider backend={HTML5Backend}><DropTarget id="detailize-list" accept={["issue"]} onDrop={(e) => console.log(e)}>Detailize</DropTarget></DndProvider>,
      key: "detailize",
      content: <IssueListPanel />
    }
  ]

  return (
    <Tabs activeTab='issues' tabs={tabs} />
  )
}

export default C
