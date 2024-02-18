import React from 'react'
import { Button, Text, Title, Stack, rem } from '@mantine/core'
import classes from '@/styles/About.module.css'

export default function About() {
  return (
    <main className={``}>
      <Stack gap="sm">
        <Title c="taupe" order={1} fw={800}>
          About Us
        </Title>
        <Text c="taupe" size="lg">
          We are a small team of tea enthusiasts who believe that tea is more than just a drink; it's a way of life. Our mission is to help people discover the healing properties of tea and provide them with the knowledge they need to brew the perfect cup.
        </Text> 
      </Stack>
    </main>
  );
}
