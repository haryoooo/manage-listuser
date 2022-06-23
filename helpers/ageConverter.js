export const ageConverter = (bornDate) => {
  let birthday = new Date(bornDate);
  let ageDifMs = Date.now() - birthday.getTime();
  let ageDate = new Date(ageDifMs); // miliseconds from epoch
  let result = Math.abs(ageDate.getUTCFullYear() - 1970);

  return result;
};
