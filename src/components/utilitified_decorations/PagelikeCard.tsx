import React from 'react'
import Card, {type CardProps} from '@/components/v2/Card'
import LinkBtn from '@/components/v2/LinkBtn'
import Button from '@/components/v2/Button';
import type { ActionProps } from '@/types/eventTypes';

export type Props = CardProps & {
  title: any;
  actions?: ActionProps[];
  children: any;
  rightHeader?: any;
  bg?: string;
  className?: string;
  dropdown?: boolean;
}

const Panel: React.FC<Props> = (props) => {
  const pageLike = 
    <Card bg={props.bg} className={props.className || ''}>
      <h3 className="font-medium text-gray-700 mb-3 flex items-center justify-between">{props.title}{props.rightHeader}</h3>
      <div className="space-y-3 text-sm">
        {props.children}
      </div>
      <div className='flex justify-center mt-4'>
        {props.actions && props.actions.map((action) => (
          action.href ? 
          <LinkBtn variant={action.variant} href={action.href} className={"w-full mt-4" + action.className || ""} >{action.children}</LinkBtn>
          :
          <Button variant={action.variant} onClick={action.onClick!} className={"w-full mt-4" + action.className || ""} >{action.children}</Button>
        ))}
      </div>
  </Card>;

  const dropDownedPagelike = <Card bg={props.bg} className={props.className || ''}>
      <div className="collapse collapse-arrow rounded-none">
        <input type="checkbox" className="peer" />
        <div className={`collapse-title flex`}>
          <h3 className="font-medium text-gray-700 flex items-center justify-between">{props.title}{props.rightHeader}</h3>
        </div>
        <div
          className="collapse-content"
        >
          <div className="space-y-3 text-sm">
            {props.children}
          </div>
          <div className='flex justify-center mt-4'>
            {props.actions && props.actions.map((action) => (
              action.href ? 
            <LinkBtn variant={action.variant} href={action.href} className={"w-full mt-4" + action.className || ""} >{action.children}</LinkBtn>
            :
            <Button variant={action.variant} onClick={action.onClick!} className={"w-full mt-4" + action.className || ""} >{action.children}</Button>
            ))}
          </div>
        </div>
      </div>  
    </Card>;
  return (props.dropdown ? dropDownedPagelike : pageLike)
}

export default Panel
