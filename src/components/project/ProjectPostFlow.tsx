import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import RepositoryForm from './RepositoryForm'
import RepositoryConnection from "@/components/project/RepositoryConnectionPanel";
import IssueSelector from './ProjectIssueListPanel';
import EditableProjectInfoPanel from './EditableProjectInfoPanel';
import BlockchainRecordingPanel from './BlockchainRecordingPanel';
import AddingCompletionPanel from './AddingCompletionPanel';
import { GridStyle } from '@/types/eventTypes';
import Stepper from '../Stepper';

interface Props {
  createdIssueId?: string
  forkProjectId?: string
  projectId?: string
}

const isForkStep = (projectId?: string, forkProjectId?: string, createdIssueId?: string): boolean => {
  return projectId !== undefined && forkProjectId !== undefined && createdIssueId !== undefined;
}

const C: React.FC<Props> = ({ projectId, forkProjectId, createdIssueId }) => {
  const [repositoryUrl, setRepositoryUrl] = useState<string>()
  const [isFork, setIsFork] = useState(isForkStep(projectId, forkProjectId, createdIssueId))

  return (
    <Stepper
      initialStep={1}
      onStepChange={(step) => {
        console.log(step);
      }}
      onFinalStepCompleted={() => {
        window.location.href = '/maintainer/work'; // Or window.location.replace('/new-page');
      }}
      backButtonText="Previous"
      nextButtonText="Next"
      stepCircleContainerClassName='border-none! shadow-none!'
      className='justify-start border-none'
      stepContainerClassName='px-0! pt-0!'
      contentClassName='p-0!'
    >
      <RepositoryForm setRepositoryUrl={setRepositoryUrl} repositoryUrl={repositoryUrl} />
      <RepositoryConnection />
      {isFork &&
        <IssueSelector className={`${GridStyle.panel.margin!.top}`} selectedIssues={[]}
          onIssueSelect={console.log}
          onActionClick={console.log} />}
      <EditableProjectInfoPanel />
      <BlockchainRecordingPanel />
      <AddingCompletionPanel />
    </Stepper>
  )
}

export default C
