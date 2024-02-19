import React from 'react';
import { useRouter } from 'next/router'; 
import { Avatar, Title, Group, Flex } from '@mantine/core';
import classes from './Footer.module.css';

const isActiveLink = (href: string, pathname: string): boolean => {
  return pathname === href;
};

export default function Footer() {
  const router = useRouter(); 

  return (
    <footer className={classes.footer}>
      <Flex
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
          style={{ paddingBottom: '72px', gap: '32px' }}>
        <a href="/" style={{ textDecoration: "none" }}>
          <Group>
            <Avatar src="/logo/MoodBrewLogo.svg" size="lg" />
            <Title order={4} style={{ fontWeight: 800, color: 'var(--taupe)' }}>
              Mood Brew
            </Title>
          </Group>
        </a>
        <Group
          style={{ minHeight: '50px', gap: 'md', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="/" className={isActiveLink('/', router.pathname) ? classes.activeLink : classes.link}>
            Home
          </a>
          <a href="/teas" className={isActiveLink('/teas', router.pathname) ? classes.activeLink : classes.link}>
            Teas
          </a>
          <a href="/about" className={isActiveLink('/about', router.pathname) ? classes.activeLink : classes.link}>
            About Us
          </a>
        </Group>
      </Flex>
      <p className={`${classes.border} ${classes.footerText}`}>© MoodBrew</p>
    </footer>
  );
}
