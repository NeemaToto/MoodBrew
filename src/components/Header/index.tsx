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
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { useRouter } from 'next/router';

export function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const router = useRouter();

    const isActive = (path) => router.pathname === path;

    return (
        <Box pb={35} pt={35}>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <a href="/" style={{ textDecoration: 'none' }}>
                        <Group>
                            <Avatar src='/logo/MoodBrewLogo.svg' size='lg' />
                            <Title order={4} fw={800} c='taupe'>Mood Brew</Title>
                        </Group>
                    </a>
                    <Group h="100%" gap={0} visibleFrom="sm">
                        <a href="/" className={`${classes.link} ${isActive('/') ? classes.active : ''}`}>
                            Home
                        </a>
                        <a href="/teas" className={`${classes.link} ${isActive('/teas') ? classes.active : ''}`}>
                            Teas
                        </a>
                        <a href="/about" className={`${classes.link} ${isActive('/about') ? classes.active : ''}`}>
                            About Us
                        </a>
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
                    <a href="/" className={`${classes.link} ${isActive('/') ? classes.active : ''}`}>
                        Home
                    </a>
                    <a href="/teas" className={`${classes.link} ${isActive('/teas') ? classes.active : ''}`}>
                        Teas
                    </a>
                    <a href="/about" className={`${classes.link} ${isActive('/about') ? classes.active : ''}`}>
                        About Us
                    </a>
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
