export function updateArrayItemImmutable(values: any[], newItem: any, indexFunc: (item: any) => boolean) {
  if (!values) {
    return values;
  }

  const updateIndex = values.findIndex(indexFunc);

  if (!isArrayIndexValid(values, updateIndex)) {
    return values;
  }

  return [
    ...values.slice(0, updateIndex),
    newItem,
    ...values.slice(updateIndex + 1)
  ];
}

export function removeArrayItemImmutable(values: any[], indexFunc: (item: any) => boolean) {
  if (!values) {
    return values;
  }

  const removeIndex = values.findIndex(indexFunc);

  if (!isArrayIndexValid(values, removeIndex)) {
    return values;
  }

  return [
    ...values.slice(0, removeIndex),
    ...values.slice(removeIndex + 1)
  ];
}

export function isArrayIndexValid(values: any[], index: number) {
  return Array.isArray(values) && index >= 0 && index < values.length;
}
