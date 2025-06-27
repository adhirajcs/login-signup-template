import { Progress, Text, HStack, VStack } from "@chakra-ui/react";
import { FiCheck, FiX } from "react-icons/fi";

interface PasswordStrengthMeterProps {
  password: string;
}

interface PasswordCriteria {
  label: string;
  test: (password: string) => boolean;
}

const passwordCriteria: PasswordCriteria[] = [
  {
    label: "At least 8 characters",
    test: (password: string) => password.length >= 8,
  },
  {
    label: "Contains uppercase letter",
    test: (password: string) => /[A-Z]/.test(password),
  },
  {
    label: "Contains lowercase letter",
    test: (password: string) => /[a-z]/.test(password),
  },
  {
    label: "Contains number",
    test: (password: string) => /\d/.test(password),
  },
  {
    label: "Contains special character",
    test: (password: string) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
  },
];

const getPasswordStrength = (password: string): { strength: number; label: string; color: string } => {
  if (!password) return { strength: 0, label: "Enter password", color: "gray.400" };
  
  const passedCriteria = passwordCriteria.filter(criteria => criteria.test(password)).length;
  
  if (passedCriteria < 2) return { strength: 20, label: "Very Weak", color: "red.500" };
  if (passedCriteria < 3) return { strength: 40, label: "Weak", color: "orange.500" };
  if (passedCriteria < 4) return { strength: 60, label: "Fair", color: "yellow.500" };
  if (passedCriteria < 5) return { strength: 80, label: "Good", color: "blue.500" };
  return { strength: 100, label: "Strong", color: "green.500" };
};

export const PasswordStrengthMeter = ({ password }: PasswordStrengthMeterProps) => {
  const { strength, label, color } = getPasswordStrength(password);

  return (
    <VStack align="stretch" gap={2} mt={2}>
      <HStack justify="space-between">
        <Text fontSize="sm" fontWeight="medium">
          Password Strength
        </Text>
        <Text fontSize="sm" color={color} fontWeight="medium">
          {label}
        </Text>
      </HStack>
      
      <Progress.Root
        value={strength}
        size="sm"
        colorScheme={
          strength < 40 ? "red" : 
          strength < 60 ? "orange" : 
          strength < 80 ? "yellow" : 
          strength < 100 ? "blue" : "green"
        }
      >
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
      
      {password && (
        <VStack align="stretch" gap={1} mt={2}>
          {passwordCriteria.map((criteria, index) => {
            const isPassed = criteria.test(password);
            return (
              <HStack key={index} fontSize="xs">
                {isPassed ? (
                  <FiCheck color="green" size={12} />
                ) : (
                  <FiX color="red" size={12} />
                )}
                <Text color={isPassed ? "green.600" : "gray.500"}>
                  {criteria.label}
                </Text>
              </HStack>
            );
          })}
        </VStack>
      )}
    </VStack>
  );
};
