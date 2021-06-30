export const last = (list) => {
  if (Array.isArray(list)) {
    return list.pop();
  } else {
    return undefined;
  }
};
