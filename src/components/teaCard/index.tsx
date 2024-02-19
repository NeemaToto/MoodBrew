import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Image, Text, Badge, Button, Group, TextInput } from '@mantine/core';
import styles from './teaCard.module.css'

type Tea = {
  teaName: string;
  type: string;
  steepTime: string;
  origin: string;
  benefit: string;
  flavor: string;
  caffeineLevel: string;
};

interface TeaCardProps {
  searchTerm: string;
}

export default function TeaCard({ searchTerm }: TeaCardProps) {
  const [teaData, setTeaData] = useState<Tea[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Tea[]>('https://raw.githubusercontent.com/NeemaToto/NeemaToto.github.io/main/data/tea.json');
        setTeaData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredTeas = teaData.filter(tea => {
    return (
      tea.teaName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tea.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tea.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tea.benefit.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tea.flavor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tea.caffeineLevel.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
      <main className={styles.grid}>
        {filteredTeas.map((tea, index) => (
          <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                height={160}
                alt="Tea Image"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>{tea.teaName}</Text>
              <Badge color="taupe">Benefit For: {tea.benefit}</Badge>
            </Group>

            <Text size="sm" c="dimmed">
              {`This tea is a ${tea.type} tea which takes ${tea.steepTime} to steep. The tea is originated from ${tea.origin} and has a ${tea.flavor} flavour with a ${tea.caffeineLevel} caffeine level.`}
            </Text>

            <Button color="sage" fullWidth mt="md" radius="md">
              View
            </Button>
          </Card>
        ))}
      </main>
    </>
  );
}
