export const getStringedDate = (targetDate) => {
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const date = targetDate.getDay();

  if (month < 10) {
    month = `0${month}`;
  }

  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};
