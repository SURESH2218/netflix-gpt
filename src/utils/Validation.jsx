export const Validation = (email, password, user) => {
  const isUserValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(user);
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPassValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isUserValid) return "username is not valid";
  if (!isEmailValid) return "Email is not valid";
  if (!isPassValid) return "password is not valid";
  return null;
};
