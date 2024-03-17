import { Title, Stack, Flex, Text, Input, Group, Button, PasswordInput, rem } from "@mantine/core";
import React, { useState } from "react";
import classes from "./SignupForm.module.css";
import { IconLock } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "../../../firebase";


export default function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const icon = <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
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
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setPasswordError("");
    } catch (error: unknown) {
      console.error("Error signing up:", (error as FirebaseError).message);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
