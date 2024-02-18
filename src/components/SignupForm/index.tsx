import { Title,Stack, Flex,Text, Input, Group, Button, PasswordInput, rem } from "@mantine/core";
import React from "react";
import classes from "./SignupForm.module.css";
import { IconLock } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

export default function SignupForm() {

  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const icon = <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

  return (
    <div className={classes.main}>
      <Flex justify="flex-start"
      align="flex-start"
      direction="column">
        <Stack gap="sm">
          <Title c="taupe" order={3}>
            Sign Up for free
          </Title>
          <Text c="taupe" size="sm">
            By making an account you can post reviews and share your experiences!
          </Text>
        </Stack>
        <form className={classes.form}>
          <Title order={4} c="taupe" pb="sm">
            Sign Up Now!
          </Title>
          <Stack>
          <Flex 
            justify="space-between" 
            gap= "1rem"
            direction={isSmallScreen ? "column" : "row"} 
            style={{ display: "flex" }}
                >
                  <Input.Wrapper
                    label="First name"
                    withAsterisk
                    description=""
                    style={{ flex: 1 }}
                  >
                    <Input placeholder="your first name" />
                  </Input.Wrapper>
                  <Input.Wrapper
                    label="Last name"
                    withAsterisk
                    description=""
                    style={{ flex: 1 }}
                  >
                    <Input placeholder="your last name" />
                  </Input.Wrapper>
                </Flex>
            <Input.Wrapper label="Email" withAsterisk description="">
              <Input placeholder="@ Your email" />
            </Input.Wrapper>
            <PasswordInput withAsterisk leftSection={icon} label="Password" placeholder="Password" />
              <PasswordInput 
                withAsterisk
                rightSection={icon}
                label="Confirm Password"
                placeholder="Confirm password"
                mt="md"
              />
          </Stack>
          <Group justify="space-between" gap="1rem" style={{ display: "flex", paddingTop: "1.5rem" }}>
            <Button>
              <Text size="md">Register</Text>
            </Button>
          </Group>
        </form>
      </Flex>
    </div>
  );
}

