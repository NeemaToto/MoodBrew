import { useState, FormEvent, ChangeEvent } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { auth } from "../../../firebase";
import { IconLock } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { Title, Stack, Flex, Text, Input, Group, Button, PasswordInput, rem } from "@mantine/core";
import classes from "./SignupForm.module.css";
import { FirebaseError } from "firebase/app";

export default function SignupForm() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [signupError, setSignupError] = useState<string>(""); 
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const icon = <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      if (password.length < 6) {
        throw new Error("Password should be at least 6 characters long");
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User signed up successfully:", user);

      window.location.href = "/";

      setTimeout(() => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setPasswordError("");
        setSignupError(""); 
      }, 2000);
    } catch (error) {
      console.error("Error signing up:", (error as Error).message);
      if ((error as FirebaseError).code === "auth/email-already-in-use") { 
        setSignupError("Email is already in use");
      } else {
        setSignupError((error as Error).message);
      }
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError("Password should be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className={classes.main}>
      <Flex justify="flex-start" align="flex-start" direction="column">
        <Stack gap="sm">
          <Title c="taupe" order={3}>
            Sign Up for free
          </Title>
          <Text c="taupe" size="sm">
            By making an account you can post reviews and share your experiences!
          </Text>
        </Stack>
        <form className={classes.form} onSubmit={handleSignup}>
          <Title order={4} c="taupe" pb="sm">
            Sign Up Now!
          </Title>
          <Stack>
            <Flex justify="space-between" gap="1rem" direction={isSmallScreen ? "column" : "row"} style={{ display: "flex" }}>
              <Input.Wrapper label="First name" withAsterisk description="" style={{ flex: 1 }}>
                <Input placeholder="your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </Input.Wrapper>
              <Input.Wrapper label="Last name" withAsterisk description="" style={{ flex: 1 }}>
                <Input placeholder="your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </Input.Wrapper>
            </Flex>
            <Input.Wrapper label="Email" withAsterisk description="">
              <Input placeholder="@ Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Input.Wrapper>
            <PasswordInput withAsterisk leftSection={icon} label="Password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            <PasswordInput withAsterisk rightSection={icon} label="Confirm Password" placeholder="Confirm password" mt="md" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            {passwordError && <Text size="sm" color="red" mt="sm">{passwordError}</Text>}
          </Stack>
          {signupError && <Text size="sm" color="red" mt="sm">{signupError}</Text>}
          <Group justify="space-between" gap="1rem" style={{ display: "flex", paddingTop: "1.5rem" }}>
            <Button type="submit">
              <Text size="md">Register</Text>
            </Button>
            <a href="/login">
              <Button>
                <Text size="md">Login Instead</Text>
              </Button>
            </a>
          </Group>
        </form>
      </Flex>
    </div>
  );
}
