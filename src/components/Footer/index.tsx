import React from 'react'
import classes from './Footer.module.css'
import { Anchor, Avatar, Title, Group, Flex, Box } from '@mantine/core';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Flex
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
          pb={72}
          gap={32}>
        <Anchor href="/" style={{ textDecoration: "none" }}>
          <Group >
            <Avatar src="/logo/MoodBrewLogo.svg" size="lg" />
            <Title order={4} fw={800} c="taupe">
              Mood Brew
            </Title>
          </Group>
        </Anchor>
        <Group
          mih={50}
          gap="md"
          justify="center"
          align="center"
          wrap="wrap"
        >
          <Anchor c="taupe" href="/" className={classes.link}>
            Home
          </Anchor>
          <Anchor c="taupe" href="teas" className={classes.link}>
            Teas
          </Anchor>
          <Anchor c="taupe" href="about" className={classes.link}>
            About Us
          </Anchor>
        </Group>
      </Flex>
        <p className={classes.border}>© MoodBrew</p>
    </footer>
  );
}
