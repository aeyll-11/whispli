import { describe, expect, it } from 'vitest';
import { useData } from '../fetchData';

describe('useData', () => {
  it('on init variable should have their default value', () => {
    const { items, isLoading } = useData();

    expect(items.value).toBeUndefined();
    expect(isLoading.value).toBeFalsy();
  });

  it('on fetching data is loading should be true', () => {
    const { isLoading, fetchData } = useData();

    /** avoid await to keep isLoading state*/
    fetchData();

    expect(isLoading.value).toBeTruthy();
  });

  it('after fetching data items should be defined', async () => {
    const { items, fetchData } = useData();

    await fetchData();
    expect(items.value).toBeDefined();
  });
});
