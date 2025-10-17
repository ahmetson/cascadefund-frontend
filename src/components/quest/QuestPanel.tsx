import React, { useEffect, useState } from 'react'
import ProjectRating from '@/components/rating/ProjectRating'
import Panel from '@/components/utilitified_decorations/PagePanel'
import Badge from '@/components/Badge'
import TaskItem from './TaskItem'
import { bgClassNames, GridStyle } from '@/types/eventTypes'
import Tooltip from '../utilitified_decorations/Tooltip'
import Button from '../Button'
import { useHotkeys } from 'react-hotkeys-hook';


interface Props {
  title?: string
}

interface TaskProps {
  title: string
  points: number
  time: string
  isHighlighted?: boolean
  id?: string
}

const findTaskById = (tasks: TaskProps[], id: string | undefined) => {
  return tasks.find(task => task.id === id);
}

const defaultLabel = "selects a task";

const TasksSection: React.FC<Props> = ({ title = 'My Tasks' }) => {
  const [tasks, setTasks] = useState<TaskProps[]>([
    { title: "Complete project proposal", points: 50, time: "10:00 AM" },
    { title: "Review client feedback", points: 50, time: "11:30 AM" },
    { title: "Team meeting", points: 50, time: "1:00 PM" },
    { title: "Update documentation", points: 50, time: "3:00 PM" },
    { title: "Send weekly report", points: 50, time: "5:00 PM" }
  ].map((task, i) => ({ ...task, id: `${i + 1}` }))
  ); // Add id to each task

  const [selectedTaskId, setSelectedTaskId] = useState<string | undefined>();
  const [label, setLabel] = useState(defaultLabel)
  const [completedTaskId, setCompletedTaskId] = useState<string | undefined>();
  const [hide, setHided] = useState(false);

  useEffect(() => {
    setLabel(selectedTaskId === undefined ? defaultLabel : 'Clear')
    if (selectedTaskId) {
      scrollToItem(selectedTaskId);
    }
  }, [selectedTaskId])

  useEffect(() => {
    if (tasks.length === 0) {
      setTimeout(() => {
        setHided(true);
      }, 3000)
    }
  }, [tasks])

  const scrollToItem = (id: string) => {
    if (id === tasks[tasks.length - 1].id) {
      itemRefs[id].scrollIntoView(false);
    } else {
      itemRefs[id].scrollIntoView({ block: 'center', behaviour: 'smooth', inline: 'nearest' });
    }
  };

  const selectFirstTask = () => {
    const firstTaskId = tasks[0].id;
    setSelectedTaskId(firstTaskId);
  }
  const deselectTask = () => {
    setSelectedTaskId(undefined);
  }

  const onTaskClick = (id: string) => {
    if (selectedTaskId === id) {
      deselectTask();
    } else {
      setSelectedTaskId(id);
    }
  }

  const playTask = () => {
    setCompletedTaskId(selectedTaskId)
    setTimeout(() => {
      const nextTaskId = getNextTaskId();
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === selectedTaskId) {
          delete itemRefs[tasks[i].id!];
          delete tasks[i];
        }
      }

      setTasks(tasks.filter(task => task !== undefined));

      setSelectedTaskId(nextTaskId);
    }, 250)
  }

  const getNextTaskId = (): string | undefined => {
    if (selectedTaskId) {
      const currentIndex = tasks.findIndex(task => task.id === selectedTaskId);
      const nextIndex = (currentIndex + 1) % tasks.length;
      const nextTaskId = tasks[nextIndex].id;
      return nextTaskId;
    }
  }

  const selectNextTask = () => {
    if (selectedTaskId) {
      const currentIndex = tasks.findIndex(task => task.id === selectedTaskId);
      const nextIndex = (currentIndex + 1) % tasks.length;
      const nextTaskId = tasks[nextIndex].id;
      setSelectedTaskId(nextTaskId);
    }
  }
  const selectPreviousTask = () => {
    if (selectedTaskId) {
      const currentIndex = tasks.findIndex(task => task.id === selectedTaskId);
      const previousIndex = (currentIndex - 1 + tasks.length) % tasks.length;
      const previousTaskId = tasks[previousIndex].id;
      setSelectedTaskId(previousTaskId);
    }
  }

  useHotkeys('enter', () => {
    if (selectedTaskId) playTask();
    else selectFirstTask();
  });
  useHotkeys('left', selectPreviousTask);
  useHotkeys('esc', deselectTask); // Select/Deselect the first task
  useHotkeys('right', selectNextTask);

  const itemRefs: { [key: string]: any } = {};

  return (
    tasks.length > 0 ?
      <Panel className={`${GridStyle.panel.margin!.bottom}`} title={
        <div>{title}<Badge variant='red'>{tasks.length}</Badge>
          <p className="text-sm text-gray-500 font-normal text-center">
            Complete the management tasks.
          </p>
        </div>} rightHeader={<ProjectRating />}>
        <div className={`p-4 space-y-3 lg:max-h-[30vh] overflow-y-auto ${bgClassNames.listContent}`}>
          {tasks.map((task) =>
            <TaskItem {...task} ref={(el: any) => (itemRefs[task.id!] = el)} onTaskClick={onTaskClick} completedTaskId={completedTaskId} selectedTaskId={selectedTaskId} />,
          )}
        </div>
        <div className='h-6 flex justify-between'>
          <Tooltip
            content={
              <div className="text-sm">
                {selectedTaskId ? 'Press Esc to deselect the task.' : 'Press Enter to select the first task.'}
              </div>
            }
          >
            <Button
              onClick={selectedTaskId ? deselectTask : selectFirstTask}
              variant={selectedTaskId ? 'secondary-outline' : 'outline'}
              className='flex flex-start space-x-1 m-0 p-1!'>
              <kbd className="kbd border border-gray-300 rounded-sm border-solid px-1 w-12 block">
                {selectedTaskId ? 'Esc' : 'Enter'}
              </kbd>
              <div>{label}</div>
            </Button>
          </Tooltip>

          {selectedTaskId &&
            <Tooltip
              content={
                <div className="text-sm">
                  Press Enter to start the quest system.
                  Guides and notifications, and Auto UI will guide you through the process.
                  Minimum effort.
                </div>
              }
            >
              <Button onClick={playTask} variant={'primary'} className='flex flex-start space-x-1 m-0 p-1!'>
                <kbd className="kbd border border-gray-300 rounded-sm border-solid px-1 text-gray-600 w-12 block">Enter</kbd>
                <div>Play</div>
              </Button>
            </Tooltip>
          }

          {selectedTaskId &&
            <Tooltip
              content={
                <div className="text-sm">
                  Press on ◀︎   ▶︎ arrow buttons to select previous or next task.
                  <br />
                  Pressing on the button will select the next task.
                </div>
              }
            >
              <Button onClick={selectNextTask} variant={'secondary-outline'} className='flex flex-start space-x-1 m-0 p-1!'>
                <kbd className="kbd border border-gray-300 rounded-sm border-solid px-1 w-12 block">◀︎    ▶︎</kbd>
                <div>Change Task</div>
              </Button>
            </Tooltip>
          }
        </div>
      </Panel> : hide ? null : <Panel className={`${GridStyle.panel.margin!.bottom}`} title={
        <div>Tasks are completed<Badge variant='info'>{tasks.length}</Badge>
        </div>} rightHeader={<ProjectRating />}>
        <div className={`p-4 space-y-3 lg:max-h-[30vh] overflow-y-auto`}>
          Come back in a few days later. No tasks to do.
        </div>
      </Panel>
  )
}

export default TasksSection
