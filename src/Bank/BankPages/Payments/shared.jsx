export const getFormattedBillDate = (billDate) => {
  const [bMonth, bDay, bYear] = billDate
    ? billDate.toLocaleDateString("en-US").split("/")
    : [];
  return `${bMonth}/${bDay}/${bYear}`;
};
