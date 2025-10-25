import React, { useState } from 'react'
import RepositoryForm from './RepositoryForm'
import RepositoryConnection from "@/components/project/RepositoryConnectionPanel";
import ForkLinkingPanel from './ForkLinkingPanel';
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

  const scrollTop = () => {
    window.scrollTo({
      top: 10,
      behavior: 'smooth', // Scrolls smoothly to the top

    });
  };

  return (
    <Stepper
      initialStep={1}
      onStepChange={() => {
        scrollTop();
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
        <ForkLinkingPanel
          className={`${GridStyle.panel.margin!.top}`}
          project={{ id: 'project-1', name: 'Example Project', repository: 'https://github.com/example/project' }}
          fork={{ id: 'fork-1', name: 'Forked Project', repository: 'https://github.com/example/fork' }}
          onSelectedIssuesChange={(ids) => console.log('Selected issues:', ids)}
          onActionClick={console.log} />}
      <EditableProjectInfoPanel />
      <BlockchainRecordingPanel />
      <AddingCompletionPanel />
    </Stepper>
  )
}

export default C
