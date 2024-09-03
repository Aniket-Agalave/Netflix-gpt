export const checkValidData = (name, email, password) => {
  const isNameValid = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+(?:[\s'-][a-zA-ZÀ-ÖØ-öø-ÿ]+)*$/.test(
    name
  );
  const isEmailValid =
    /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password
    );

  if (!isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
