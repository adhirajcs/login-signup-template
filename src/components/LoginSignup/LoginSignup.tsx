import { useState, useEffect } from "react";
import { Flex, Box, Input, Button, Text, Fieldset, Field, Stack } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input";
import { PasswordStrengthMeter } from "@/components/LoginSignup/password-strength-meter";
import { DarkMode, LightMode } from "@/components/ui/color-mode";
import { handleSignUp } from "@/components/LoginSignup/handleSignUp";
import { handleLogin } from "@/components/LoginSignup/handleLogin";

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

  const onSignUp = () => {
    handleSignUp({
      name,
      email,
      password,
      confirmPassword,
      setErrors,
      setErrorMessage,
      setIsLogin,
    });
  };

  const onLogin = () => {
    handleLogin({
      email,
      password,
      setErrors,
      setErrorMessage,
    });
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
              <Flex direction="column" align="center" gap={4} width="2/5">
                <Fieldset.Root size="lg" maxW="md">
                  <Stack>
                    <Fieldset.Legend>Create an Account</Fieldset.Legend>
                    <Fieldset.HelperText>Please provide your details below.</Fieldset.HelperText>
                  </Stack>
                  <Fieldset.Content>
                    <Field.Root invalid={errors.name}>
                      <Field.Label>Name</Field.Label>
                      <Input
                        placeholder="John Doe"
                        variant="flushed"
                        borderColor="blue.800"
                        _focus={{ borderColor: "blue.400" }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      {errors.name && <Field.ErrorText>{errorMessage.name}</Field.ErrorText>}
                    </Field.Root>
                    <Field.Root invalid={errors.email}>
                      <Field.Label>Email</Field.Label>
                      <Input
                        placeholder="johndoe@example.com"
                        variant="flushed"
                        borderColor="blue.800"
                        _focus={{ borderColor: "blue.400" }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && <Field.ErrorText>{errorMessage.email}</Field.ErrorText>}
                    </Field.Root>
                    <Field.Root invalid={errors.password}>
                      <Field.Label>Password</Field.Label>
                      <PasswordInput
                        placeholder="**********"
                        variant="flushed"
                        borderColor="blue.800"
                        _focus={{ borderColor: "blue.400" }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <PasswordStrengthMeter password={password} />
                      {errors.password && (
                        <Field.ErrorText>{errorMessage.password}</Field.ErrorText>
                      )}
                    </Field.Root>
                    <Field.Root invalid={errors.confirmPassword}>
                      <Field.Label>Confirm Password</Field.Label>
                      <PasswordInput
                        placeholder="**********"
                        variant="flushed"
                        borderColor="blue.800"
                        _focus={{ borderColor: "blue.400" }}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      {errors.confirmPassword && (
                        <Field.ErrorText>{errorMessage.confirmPassword}</Field.ErrorText>
                      )}
                    </Field.Root>
                  </Fieldset.Content>
                  <Button bgColor="blue.200" onClick={onSignUp}>
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
              <Flex direction="column" align="center" gap={4} width="2/5">
                <Fieldset.Root size="lg" maxW="md">
                  <Stack>
                    <Fieldset.Legend>Welcome Back</Fieldset.Legend>
                    <Fieldset.HelperText>
                      Please enter your Email ID and Password.
                    </Fieldset.HelperText>
                  </Stack>
                  <Fieldset.Content>
                    <Field.Root invalid={errors.email}>
                      <Field.Label>Email</Field.Label>
                      <Input
                        placeholder="johndoe@example.com"
                        variant="flushed"
                        borderColor="blue.200"
                        _focus={{ borderColor: "blue.800" }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && <Field.ErrorText>{errorMessage.email}</Field.ErrorText>}
                    </Field.Root>
                    <Field.Root invalid={errors.password}>
                      <Field.Label>Password</Field.Label>
                      <PasswordInput
                        placeholder="**********"
                        variant="flushed"
                        borderColor="blue.200"
                        _focus={{ borderColor: "blue.800" }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {errors.password && (
                        <Field.ErrorText>{errorMessage.password}</Field.ErrorText>
                      )}
                    </Field.Root>
                  </Fieldset.Content>
                  <Button bgColor="blue.800" onClick={onLogin}>
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
