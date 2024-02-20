export default {
  toUpdateSearchParam: (key: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(key, value);
    return searchParams;
  },
  toRemoveSearchParam: (key: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete(key);
    return searchParams;
  },
};
