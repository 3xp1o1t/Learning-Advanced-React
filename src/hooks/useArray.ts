import { useState } from 'react';

interface UseArrayProps<T> {
  defaultValue: T[];
}

function useArray<T>({ defaultValue }: UseArrayProps<T>) {
  const [array, setArray] = useState<T[]>(defaultValue);

  function push(newValue: T) {
    setArray((oldValues) => [...oldValues, newValue]);
  }

  function filter(callback: (value: T, index: number, array: T[]) => boolean) {
    setArray((newArray) => newArray.filter(callback));
  }

  function update(index: number, newValue: T) {
    setArray((oldValues) => [
      ...oldValues.slice(0, index),
      newValue,
      ...oldValues.slice(index + 1, oldValues.length),
    ]);
  }

  function remove(index: number) {
    setArray((oldValues) => [
      ...oldValues.slice(0, index),
      ...oldValues.slice(index + 1, oldValues.length),
    ]);
  }

  function clear() {
    setArray([]);
  }

  return { array, set: setArray, push, filter, update, remove, clear };
}

export default useArray;
