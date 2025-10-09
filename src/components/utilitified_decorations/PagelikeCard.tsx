import React from 'react'
import Card from '@/components/v2/Card'
import LinkBtn from '@/components/v2/LinkBtn'
import Button from '@/components/v2/Button';
import type { ActionProps } from '@/types/eventTypes';

interface Props {
  title: string;
  actions: ActionProps[];
  children: any;
  rightHeader?: any;
  bg?: string;
  className?: string;
}

const Panel: React.FC<Props> = (props) => {
  return (
    <Card bg={props.bg} className={props.className || ''}>
      <h3 className="font-medium text-gray-700 mb-3 flex items-center justify-between">{props.title}{props.rightHeader}</h3>
      <div className="space-y-3 text-sm">
        {props.children}
      </div>
      <div className='flex justify-center mt-4'>
        {props.actions.map((action) => (
          action.href ? 
          <LinkBtn variant={action.variant} href={action.href} className="w-full mt-4" label={action.label} />
          :
          <Button variant={action.variant} onClick={action.onClick!} className="w-full mt-4" >{action.label}</Button>
        ))}
      </div>
    </Card>
  )
}

export default Panel
