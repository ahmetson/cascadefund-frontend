import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import RepositoryForm from './RepositoryForm'
import RepositoryConnection from "@/components/project/RepositoryConnectionPanel";
import IssueSelector from './ProjectIssueListPanel';
import EditableProjectInfoPanel from './EditableProjectInfoPanel';
import BlockchainRecordingPanel from './BlockchainRecordingPanel';
import AddingCompletionPanel from './AddingCompletionPanel';
import NotificationBanner from '../NotificationBanner';
import { GridStyle } from '@/types/eventTypes';

export enum Step {
  Post,
  Repository,
  Fork,
  Update,
  Blockchain,
  Completed,
}

interface Props {
  createdIssueId?: string
  forkProjectId?: string
  projectId?: string
}

const isForkStep = (projectId?: string, forkProjectId?: string, createdIssueId?: string): boolean => {
  return projectId !== undefined && forkProjectId !== undefined && createdIssueId !== undefined;
}

const C: React.FC<Props> = ({ projectId, forkProjectId, createdIssueId }) => {
  const [step, setStep] = useState(
    isForkStep(projectId, forkProjectId, createdIssueId) ?
      Step.Fork : Step.Post);

  return (
    <div className='bg-transparent'>
      <AnimatePresence mode="wait">
        <motion.div
          key={step ? "updateable" : "view"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2, when: "beforeChildren", delayChildren: 0.2, }}
        >
          {step === Step.Post && <RepositoryForm onActionClick={(a: any) => { console.log(a); setStep(Step.Repository) }} />}
          {step === Step.Repository && <RepositoryConnection onActionClick={(a) => a === undefined ? setStep(Step.Update) : setStep(Step.Fork)} />}
          {step === Step.Fork && <NotificationBanner type={'warning'} title={'Issue why you fork'} >
            Select or create a new issue. In CascadeFund,
            we link the projects between each other via issues in order to make them discoverable
            and self structurized.
          </NotificationBanner>}
          {step === Step.Fork && <IssueSelector className={`${GridStyle.panel.margin!.top}`} selectedIssues={[]}
            onIssueSelect={console.log}
            onActionClick={(a) => setStep(Step.Update)} />}
          {step === Step.Update && <EditableProjectInfoPanel onActionClick={(a) => setStep(Step.Blockchain)} />}
          {step === Step.Blockchain && <BlockchainRecordingPanel onActionClick={(a) => setStep(Step.Completed)} />}
          {step === Step.Completed && <AddingCompletionPanel />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default C
