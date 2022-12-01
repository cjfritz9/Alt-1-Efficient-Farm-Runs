export const enterSubmitHandler = (e: any) => {
  if (e.key === 'Enter' && e.shiftKey === false) {
    return true;
  }
  return false;
}