export const handleSignUp = ({ name, email, password, confirmPassword, setErrors, setErrorMessage, setIsLogin }: any) => {
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

  if (!name) {
    newErrors.name = true;
    newErrorMessage.name = "Name is required!";
    hasError = true;
  }
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
  } else if (!/[A-Z]/.test(password)) {
    newErrors.password = true;
    newErrorMessage.password = "Password must contain at least one uppercase letter!";
    hasError = true;
  } else if (!/[a-z]/.test(password)) {
    newErrors.password = true;
    newErrorMessage.password = "Password must contain at least one lowercase letter!";
    hasError = true;
  } else if (!/\d/.test(password)) {
    newErrors.password = true;
    newErrorMessage.password = "Password must contain at least one number!";
    hasError = true;
  } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    newErrors.password = true;
    newErrorMessage.password = "Password must contain at least one special character!";
    hasError = true;
  }

  if (!confirmPassword) {
    newErrors.confirmPassword = true;
    newErrorMessage.confirmPassword = "Confirm Password is required!";
    hasError = true;
  }
  if (password && confirmPassword && password !== confirmPassword) {
    newErrors.confirmPassword = true;
    newErrorMessage.confirmPassword = "Password and Confirm Password are different!";
    hasError = true;
  }

  if (hasError) {
    setErrors(newErrors);
    setErrorMessage(newErrorMessage);
    return;
  }
  setIsLogin(true);
  // Proceed with sign-up logic...
};
