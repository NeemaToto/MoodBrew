import React from 'react'
import classes from './TeaCard.module.css'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export default function TeaCard()  {
    return (
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
            height={160}
            alt="Tea Image"
          />
        </Card.Section>
  
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Tea Name</Text>
          <Badge color="taupe">Benifit</Badge>
        </Group>
  
        <Text size="sm" c="dimmed">
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati nulla neque unde reiciendis voluptate itaque dolorem saepe excepturi? Dolor sint, ipsam asperiores aut natus id recusandae nemo ad accusantium quo.
        </Text>
  
        <Button color="sage" fullWidth mt="md" radius="md">
          View
        </Button>
      </Card>
    );
}