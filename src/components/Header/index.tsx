import {
    Group,
    Button,
    Divider,
    Box,
    Burger,
    Drawer,
    ScrollArea,
    rem,
    Avatar,
    Title,
    Anchor
} from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';

export function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

    return (
        <Box pb={35} pt={35}>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <Group>
                        <Avatar src='/logo/MoodBrewLogo.svg' size='lg' />
                        <Title order={4} fw={700} c='taupe'>Mood Brew</Title>
                    </Group>
                    <Group h="100%" gap={0} visibleFrom="sm">
                        <Anchor c='taupe' href="#" className={classes.link}>
                            Home
                        </Anchor>
                        <Anchor c='taupe' href="#" className={classes.link}>
                            Teas
                        </Anchor>
                        <Anchor c='taupe' href="#" className={classes.link}>
                            About Us
                        </Anchor>
                    </Group>

                    <Group visibleFrom="sm">
                        <Button variant="transparent" color='taupe'>Sign up</Button>
                        <Button color='taupe'>Log in</Button>
                    </Group>

                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    <Divider my="sm" />

                    <Anchor c='taupe' href="#" className={classes.link}>
                        Home
                    </Anchor>

                    <Anchor c='taupe' href="#" className={classes.link}>
                        Learn
                    </Anchor>
                    <Anchor c='taupe' href="#" className={classes.link}>
                        Academy
                    </Anchor>

                    <Divider my="sm" />

                    <Group justify="center" grow pb="xl" px="md">
                        <Button variant="default">Log in</Button>
                        <Button>Sign up</Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}