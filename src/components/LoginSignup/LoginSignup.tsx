import { useState, useEffect } from "react";
import { Flex, Box, Input, Button, Text, Fieldset, Field, Stack } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input";
import { DarkMode, LightMode } from "@/components/ui/color-mode";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    setErrors({
      name: false,
      email: false,
      password: false,
      confirmPassword: false,
    });
    setErrorMessage({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }, [name, email, password, confirmPassword]);

  const handleSignUp = () => {
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

  const handleLogin = () => {
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

  return (
    <>
      <Flex height="100vh" width="100vw">
        {/* Left Side - Sign Up */}
        <Box
          flex="1"
          bg="blue.900"
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <DarkMode>
            {!isLogin ? (
              <Flex direction="column" align="center" gap={4}>
                <Fieldset.Root size="lg" maxW="md" w="70%">
                  <Stack>
                    <Fieldset.Legend>Create an Account</Fieldset.Legend>
                    <Fieldset.HelperText>Please provide your details below.</Fieldset.HelperText>
                  </Stack>
                  <Fieldset.Content>
                    <Field.Root invalid={errors.name}>
                      <Field.Label>Name</Field.Label>
                      <Input
                        placeholder="John Doe"
                        variant="subtle"
                        bgColor="blue.800"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      {errors.name && <Field.ErrorText>{errorMessage.name}</Field.ErrorText>}
                    </Field.Root>
                    <Field.Root invalid={errors.email}>
                      <Field.Label>Email</Field.Label>
                      <Input
                        placeholder="johndoe@example.com"
                        variant="outline"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && <Field.ErrorText>{errorMessage.email}</Field.ErrorText>}
                    </Field.Root>
                    <Field.Root invalid={errors.password}>
                      <Field.Label>Password</Field.Label>
                      <PasswordInput
                        placeholder="**********"
                        variant="outline"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <Field.HelperText>
                        Your password must be at least 8 characters long and should include a mix
                        of letters, numbers, and symbols.
                      </Field.HelperText>
                      {errors.password && <Field.ErrorText>{errorMessage.password}</Field.ErrorText>}
                    </Field.Root>
                    <Field.Root invalid={errors.confirmPassword}>
                      <Field.Label>Confirm Password</Field.Label>
                      <PasswordInput
                        placeholder="**********"
                        variant="outline"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      {errors.confirmPassword && (
                        <Field.ErrorText>{errorMessage.confirmPassword}</Field.ErrorText>
                      )}
                    </Field.Root>
                  </Fieldset.Content>
                  <Button bgColor="blue.200" onClick={handleSignUp}>
                    Sign Up
                  </Button>
                </Fieldset.Root>
              </Flex>
            ) : (
              <Flex height="100%" align="center" justify="center">
                <Box onClick={() => setIsLogin((prev) => !prev)} cursor="pointer" p={10}>
                  <Text fontSize="7xl" fontFamily="Consolas" color="blue.100">
                    ← Sign Up
                  </Text>
                </Box>
              </Flex>
            )}
          </DarkMode>
        </Box>

        {/* Right Side - Login */}
        <Box
          flex="1"
          bg="blue.100"
          color="black"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <LightMode>
            {isLogin ? (
              <Flex direction="column" align="center" gap={4}>
                <Fieldset.Root size="lg" maxW="md">
                  <Stack>
                    <Fieldset.Legend>Welcome Back</Fieldset.Legend>
                    <Fieldset.HelperText>Please enter your Email ID and Password.</Fieldset.HelperText>
                  </Stack>
                  <Fieldset.Content>
                    <Field.Root invalid={errors.email}>
                      <Field.Label>Email</Field.Label>
                      <Input
                        placeholder="johndoe@example.com"
                        variant="outline"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && <Field.ErrorText>{errorMessage.email}</Field.ErrorText>}
                    </Field.Root>
                    <Field.Root invalid={errors.password}>
                      <Field.Label>Password</Field.Label>
                      <PasswordInput
                        placeholder="**********"
                        variant="outline"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {errors.password && <Field.ErrorText>{errorMessage.password}</Field.ErrorText>}
                    </Field.Root>
                  </Fieldset.Content>
                  <Button bgColor="blue.800" onClick={handleLogin}>
                    Login
                  </Button>
                </Fieldset.Root>
              </Flex>
            ) : (
              <Flex height="100%" align="center" justifyContent="center">
                <Box onClick={() => setIsLogin((prev) => !prev)} cursor="pointer" p={10}>
                  <Text fontSize="7xl" fontFamily="Consolas" color="blue.900">
                    Login →
                  </Text>
                </Box>
              </Flex>
            )}
          </LightMode>
        </Box>
      </Flex>
    </>
  );
};

export default LoginSignup;
