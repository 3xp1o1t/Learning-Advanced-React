import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import useAsync from '../../hooks/useAsync';

describe('useAsync hook testing', () => {
  it('should set loading to true initially', () => {
    const { result } = renderHook(() => useAsync(() => Promise.resolve(1)));
    expect(result.current.loading).toBe(true);
  });

  it('should set value to the result of the callback when it resolves', async () => {
    const { result } = renderHook(() => useAsync(() => Promise.resolve(1)));

    await new Promise((resolve) => setTimeout(resolve, 10));

    expect(result.current.value).toBe(1);
  });

  it('should set error to the error thrown by the callback when it rejects', async () => {
    const { result } = renderHook(() =>
      useAsync(() => Promise.reject(new Error('Something went wrong'))),
    );

    await new Promise((resolve) => setTimeout(resolve, 10));

    expect(result.current.error).toBeInstanceOf(Error);
    //i ignore case.
    expect(result.current.error).toMatch(/something went wrong/i);
  });
});
