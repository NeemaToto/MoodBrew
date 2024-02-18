import React from 'react'
import classes from './Footer.module.css'
import { Anchor, Avatar, Title, Group, Button, Burger } from '@mantine/core';

export default function Footer() {
  return (
    <footer className={classes.footer}> 
        <Group>
                    <Anchor href="/" style={{ textDecoration: 'none' }} >
                        <Group>
                                <Avatar src='/logo/MoodBrewLogo.svg' size='lg' />
                                <Title order={4} fw={700} c='taupe'>Mood Brew</Title>
                        </Group>
                    </Anchor>
                    <Group h="100%" gap={0} visibleFrom="sm">
                        <Anchor c='taupe' href="/" className={classes.link}>
                            Home
                        </Anchor>
                        <Anchor c='taupe' href="teas" className={classes.link}>
                            Teas
                        </Anchor>
                        <Anchor c='taupe' href="about" className={classes.link}>
                            About Us
                        </Anchor>
                    </Group>
        </Group>
        <Group>
            <p>© MoodBrew</p>
        </Group>
    </footer>
  )
}
