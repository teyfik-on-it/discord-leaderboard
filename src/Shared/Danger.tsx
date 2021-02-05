import Alert, { AlertProps } from './Alert';

const Danger = ({className, ...props}: AlertProps) => (
  <Alert {...props} className={`${className} bg-red-200 text-red-700`}/>
);

export default Danger;
