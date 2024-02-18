import { Title,Stack, Flex,Text, Input, Group, Button, PasswordInput, rem } from "@mantine/core";
import React from "react";
import classes from "./SignupForm.module.css";
/*import { IconLock } from '@tabler/icons-react';*/

export default function SignupForm() {
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
            By making an account you can post reviews and share your experiences!{" "}
          </Text>
        </Stack>
      <form className={classes.form}>
        <Title order={4} c="taupe" pb="sm">
          Sign Up Now!
        </Title>
        <Stack>
          <Group justify="space-between" gap="1rem" style={{ display: "flex" }}>
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
          </Group>
          <Input.Wrapper label="Email" withAsterisk description="">
            <Input placeholder="@ Your email" />
          </Input.Wrapper>
          <Input.Wrapper label="Password" withAsterisk description="">
            <Input placeholder="Password" />
          </Input.Wrapper>
          <Input.Wrapper label="Confirm Password" withAsterisk description="">
            <Input placeholder="Confirm password" />
          </Input.Wrapper>
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

/*<PasswordInput
      label="Label"
      placeholder="PasswordInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />}
      
    />*/
