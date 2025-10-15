import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import RepositoryForm from './RepositoryForm'
import RepositoryConnection from "@/components/project/RepositoryConnectionPanel";
import ForkOriginInfoPanel from './ForkOriginInfoPanel';
import IssueSelector from './ProjectIssueListPanel';
import EditableProjectInfoPanel from './EditableProjectInfoPanel';
import BlockchainRecordingPanel from './BlockchainRecordingPanel';
import AddingCompletionPanel from './AddingCompletionPanel';

export enum Step {
  Post,
  Repository,
  Fork,
  Update,
  Blockchain,
  Completed,
}

const C: React.FC = () => {
  const [step, setStep] = useState(Step.Post);

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
          {step === Step.Fork && <ForkOriginInfoPanel className="mb-4" />}
          {step === Step.Fork && <IssueSelector selectedIssues={[]}
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
