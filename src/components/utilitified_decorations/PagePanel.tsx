import React from 'react'
import Panel, { type Props as PanelProps } from '@/components/utilitified_decorations/Panel'
import LinkBtn from '@/components/LinkBtn'
import Button from '@/components/Button';
import { type ActionProps } from '@/types/eventTypes';
import { getIcon } from '../icon';

export type Props = PanelProps & {
  icon?: string;
  key?: number | string;
  title: any;
  subtitle?: any;
  titleCenter?: boolean;  // If set true, it will put title at center ignoring right header
  actions?: ActionProps[];
  children: any;
  rightHeader?: any;
  bg?: string;
  className?: string;
  dropdown?: boolean;
}

const C: React.FC<Props> = (props) => {
  const pageLike =
    <Panel bg={props.bg}
      bgImgUrl={props.bgImgUrl}
      bgImgClassName={props.bgImgClassName}
      bgImgLabel={props.bgImgLabel}
      className={props.className || ''} key={props.key}>
      {props.titleCenter
        ? <h2 className="mb-2 text-xl flex items-center h-8 justify-center">
          {props.icon && getIcon(props.icon)}{props.title}
        </h2>
        : <h2 className={`mb-2 font-medium flex justify-between h-8`}>
          <div className={`flex items-center`}>
            {props.icon && getIcon(props.icon)}
            <div className='ml-1'>{props.title}</div>
          </div>
          {props.rightHeader}
        </h2>
      }
      {props.subtitle && <p className='text-xs mb-2 -mt-2.5'>{props.subtitle}</p>}
      <div className="space-y-3 text-gray-500 text-sm">
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
    </Panel>;

  const dropDownedPagelike = <Panel bg={props.bg} className={props.className || ''}>
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
  </Panel>;
  return (props.dropdown ? dropDownedPagelike : pageLike)
}

export default C
