export const ValidateData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (isEmailValid && isPasswordValid) {
    return "true";
  }

  if (!isEmailValid) return "Invalid Email !";

  if (!isPasswordValid) return "Weak Password !";
};
