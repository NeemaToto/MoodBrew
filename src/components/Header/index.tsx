import { useState, useEffect } from 'react';
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
import { auth } from '../../../firebase';
import { User } from 'firebase/auth';

export function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user as User);
            } else {
                setUser(null);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const isActive = (path: string) => router.pathname === path;

    const handleLogout = async () => {
        try {
            await auth.signOut();
            setUser(null);
            router.push('/');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const getFirstLetter = (email: string | null) => {
        if (email) {
            return email.charAt(0).toUpperCase();
        }
        return '';
    };

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
                        <a href="/profile" className={`${classes.link} ${isActive('/profile') ? classes.active : ''}`}>
                            Profile
                        </a>
                    </Group>

                    <Group visibleFrom="sm">
                        {user && (
                            <Avatar className={classes.circle}>{getFirstLetter(user.email)}</Avatar>
                        )}
                        {user ? (
                            <Button onClick={handleLogout} color='taupe'>Log out</Button>
                        ) : (
                            <>
                                <a href="/signup">
                                    <Button variant="transparent" color='taupe' >Sign up</Button>
                                </a>
                                <a href="/login">
                                    <Button color='taupe'>Log in</Button>
                                </a>
                            </>
                        )}
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
                    <a href="/profile" className={`${classes.link} ${isActive('/profile') ? classes.active : ''}`}>
                        Profile
                    </a>
                    <Divider my="sm" />
                    <Group justify="center" grow pb="xl" px="md">
                        {user ? (
                            <Button onClick={handleLogout}>Log out</Button>
                        ) : (
                            <>
                                <a href='/login'>
                                    <Button style={{ width: '100%' }} variant="default">Log in</Button>
                                </a>
                                <a href='/signup'>
                                    <Button style={{ width: '100%' }}>Sign up</Button>
                                </a>
                            </>
                        )}
                    </Group>

                </ScrollArea>
            </Drawer>
        </Box>
    );
}
