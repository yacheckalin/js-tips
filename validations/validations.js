export const isEmailValid = (email) =>
  !!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/gim);
