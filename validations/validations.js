export const isEmailValid = (email) =>
  !!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/gim);

export const isEmailValid2 = (email) => {
  const el = document.createElement("input");
  el.type = "email";
  el.setAttribute("value", email);
  return el.validity.valid;
};
