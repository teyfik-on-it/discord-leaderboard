import { HTMLAttributes } from 'react';

interface Content {
  title: string;
  description: string;
}

type AlertProps = Content & HTMLAttributes<HTMLDivElement>;

const Alert = ({title, description, className, ...props}: AlertProps) => (
  <div {...props} className={`${className ?? ''} px-4 py-2 rounded-lg`}>
    <h3 className={'text-xl'}>{title}</h3>
    <p className={'mt-2'}>{description}</p>
  </div>
);

export type { AlertProps };
export default Alert;
