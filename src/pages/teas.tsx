import React from 'react'
import { Button, Text, Title, Stack, rem } from '@mantine/core'
import classes from '@/styles/Teas.module.css'

export default function Teas() {
  return (
    <main className={``}>
      <Stack gap="sm">
        <Title c="taupe" order={1} fw={800}>
          Looking for a Tea?
        </Title>
        <Text c="taupe" size="lg">
          Use the search bar or navigate through our catalogue to find the perfect tea for your mood.
        </Text>
      </Stack>
    </main>
  );
}
