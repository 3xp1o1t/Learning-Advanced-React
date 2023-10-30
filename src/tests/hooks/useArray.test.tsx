import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import useArray from '../../hooks/useArray';
describe('useArray Hook', () => {
  it('should be posible to set array', () => {
    const strings = ['hello', 'world'];
    const { result } = renderHook(() =>
      useArray<string>({ defaultValue: strings }),
    );

    expect(result.current.array).toBeDefined();
    expect(result.current.array.length).toEqual(2);
    expect(result.current.array[0]).toEqual('hello');
    expect(result.current.array[1]).toEqual('world');

    act(() => {
      result.current.set(['l33t', 'c0d3', 'op']);
    });

    expect(result.current.array.length).toEqual(3);
    expect(result.current.array[0]).toEqual('l33t');
    expect(result.current.array[1]).toEqual('c0d3');
    expect(result.current.array[2]).toEqual('op');
  });

  it('should push items to the array', () => {
    const { result } = renderHook(() =>
      useArray<number>({ defaultValue: [1, 2, 3] }),
    );

    expect(result.current).toHaveProperty('push');
    expect(result.current).toHaveProperty('array');
    expect(result.current).toHaveProperty('set');

    act(() => {
      result.current.push(1);
    });

    expect(result.current.array.length).toEqual(4);
    expect(result.current.array).toEqual([1, 2, 3, 1]);
  });

  it('should filter items with custom callback', () => {
    const { result } = renderHook(() => useArray<number>({ defaultValue: [] }));

    act(() => {
      result.current.push(42);
      result.current.push(84);
      result.current.push(128);
    });

    expect(result.current.array.length).toEqual(3);

    act(() => {
      result.current.filter((n) => n < 100);
    });

    expect(result.current.array.length).toEqual(2);
    expect(result.current.array).toEqual([42, 84]);

    act(() => {
      result.current.filter((n) => n === 42);
    });

    expect(result.current.array).toEqual([42]);
  });

  it('should change 2 by 42', () => {
    const { result } = renderHook(() =>
      useArray<number>({ defaultValue: [1, 2, 3, 4, 5] }),
    );

    expect(result.current.array.length).toEqual(5);

    act(() => {
      result.current.update(1, 42);
    });

    expect(result.current.array[1]).not.toEqual(2);
    expect(result.current.array[1]).toEqual(42);
  });

  it('should remove value with index 2', () => {
    const { result } = renderHook(() =>
      useArray<string>({ defaultValue: ['hello', 'world', 'kickme'] }),
    );

    expect(result.current.array.length).toBe(3);

    act(() => {
      result.current.remove(2);
    });

    expect(result.current.array.length).toBe(2);
    expect(result.current.array[2]).toBeUndefined();
  });

  it('should clear out array', () => {
    const { result } = renderHook(() =>
      useArray<boolean>({ defaultValue: [true, false, true] }),
    );

    expect(result.current.array.length).toBe(3);

    act(() => {
      result.current.clear();
    });

    expect(result.current.array.length).toBe(0);
  });

  it('should default methods work normally (sort)', () => {
    const { result } = renderHook(() =>
      useArray<number>({ defaultValue: [5, 4, 3, 2, 1] }),
    );

    act(() => {
      result.current.array.sort((a, b) => a - b);
    });

    expect(result.current.array).not.toEqual([5, 4, 3, 2, 1]);
    expect(result.current.array).toEqual([1, 2, 3, 4, 5]);
  });
});
