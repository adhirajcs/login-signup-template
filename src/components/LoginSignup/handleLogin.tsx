export const handleLogin = ({ email, password, setErrors, setErrorMessage }: any) => {
  let hasError = false;
  const newErrors = {
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  };

  const newErrorMessage = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    newErrors.email = true;
    newErrorMessage.email = "Email is required!";
    hasError = true;
  } else if (!emailRegex.test(email)) {
    newErrors.email = true;
    newErrorMessage.email = "Please enter a valid email!";
    hasError = true;
  }

  if (!password) {
    newErrors.password = true;
    newErrorMessage.password = "Password is required!";
    hasError = true;
  } else if (password.length < 8) {
    newErrors.password = true;
    newErrorMessage.password = "Password must be at least 8 characters long!";
    hasError = true;
  }

  if (hasError) {
    setErrors(newErrors);
    setErrorMessage(newErrorMessage);
    return;
  }
  // Proceed with login logic...
};
