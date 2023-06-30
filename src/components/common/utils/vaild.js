export const vaildEmail = email => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regex.test(email);
};
export const vaildPassword = password => {
  const regex = /^.{8,}$/;
  return regex.test(password);
};
