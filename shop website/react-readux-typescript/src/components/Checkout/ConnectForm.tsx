import { useFormContext } from 'react-hook-form';

/* eslint-disable no-alert */
export const ConnectForm = ({ children }) => {
  const methods = useFormContext();
  return children({ ...methods });
};
