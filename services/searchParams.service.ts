export default {
  toUpdateSearchParam: (arr: { key: string; value: string | number }[]) => {
    const searchParams = new URLSearchParams(window.location.search);
    arr.map((obj) => searchParams.set(obj.key, obj.value));
    return searchParams;
  },
  toRemoveSearchParam: (key: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete(key);
    return searchParams;
  },
};
