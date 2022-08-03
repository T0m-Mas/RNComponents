import {useState} from 'react';

export const useForm = <T extends Object>(e: T) => {
  const [state, setState] = useState(e);
  const onChange = (field: keyof T, value: string) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return {
    ...state,
    onChange,
  };
};
