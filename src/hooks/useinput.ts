import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from 'react';

type ReturnType<T> = [
  T,
  (event: ChangeEvent<HTMLInputElement>) => void,
  Dispatch<SetStateAction<T>>
];

export default function useInput<T extends string>(
  initialValue: T
): ReturnType<T> {
  const [value, setValue] = useState(initialValue);

  const handler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as T);
  }, []);

  return [value, handler, setValue];
}
