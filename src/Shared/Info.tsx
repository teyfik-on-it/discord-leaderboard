import Alert, { AlertProps } from './Alert';

const Info = ({className, ...props}: AlertProps) => (
  <Alert {...props} className={`${className} bg-blue-200 text-blue-700`}/>
);

export default Info;
