import React, { useState } from "react";
import { Title, Stack, Flex, Text, Input, Group, Button, PasswordInput, rem } from "@mantine/core";
import { IconLock } from '@tabler/icons-react';
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import classes from "./LoginForm.module.css";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const icon = <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User logged in successfully:", user);

            window.location.href = "/";
        } catch (error: unknown) {
            console.error("Error logging in:", (error as FirebaseError).message);
            const errorCode = (error as FirebaseError).code;
            let errorMessage = "An error occurred while logging in";

            switch (errorCode) {
                case "auth/invalid-credential":
                    errorMessage = "Invalid Credentials";
                    break;
                case "auth/user-not-found":
                    errorMessage = "User not registered, please sign up";
                    break;
                case "auth/too-many-requests":
                    errorMessage = "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.";
                    break;

                default:
                    errorMessage = (error as FirebaseError).message;
                    break;
            }

            setError(errorMessage);
        }
    };

    return (
        <div className={classes.main}>
            <Flex justify="flex-start" align="flex-start" direction="column">
                <Stack gap="sm">
                    <Title c="taupe" order={3}>
                        Login
                    </Title>
                </Stack>
                <form className={classes.form} onSubmit={handleLogin}>
                    <Stack>
                        <Input.Wrapper label="Email" withAsterisk description="">
                            <Input placeholder="@ Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Input.Wrapper>
                        <PasswordInput withAsterisk leftSection={icon} label="Password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Stack>
                    {error && <Text color="red">{error}</Text>}
                    <Group justify="space-between" gap="1rem" style={{ display: "flex", paddingTop: "1.5rem" }}>
                        <Button type="submit">
                            <Text size="md">Login</Text>
                        </Button>
                        <a href="/signup">
                            <Button>
                                <Text size="md">Sign Up Instead</Text>
                            </Button>
                        </a>
                    </Group>
                </form>
            </Flex>
        </div>
    );
}
