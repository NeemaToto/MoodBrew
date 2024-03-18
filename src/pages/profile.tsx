import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Text, Title, Stack, Card, Image, Badge, Button, Group } from '@mantine/core';
import { auth } from '../../firebase';

export default function Profile() {
  const [savedTeas, setSavedTeas] = useState<string[]>([]);
  const [teaData, setTeaData] = useState<Tea[]>([]);
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const savedTeasFromStorage = JSON.parse(localStorage.getItem('savedTeas') || '[]');
    setSavedTeas(savedTeasFromStorage);

    const fetchData = async () => {
      try {
        const response = await axios.get<Tea[]>('https://raw.githubusercontent.com/NeemaToto/NeemaToto.github.io/main/data/tea.json');
        setTeaData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleRemove = (teaName: string) => {
    const updatedSavedTeas = savedTeas.filter(savedTea => savedTea !== teaName);
    setSavedTeas(updatedSavedTeas);
    localStorage.setItem('savedTeas', JSON.stringify(updatedSavedTeas));
  };

  if (!user) {
    return (
      <main>
        <Text>Login to view your teas.</Text>
      </main>
    );
  }

  return (
    <main className={``}>
      <Stack gap="sm">
        <Title c="taupe" order={1} fw={800}>
          Your Teas
        </Title>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
          {savedTeas.map((teaName: string, index: number) => {
            const tea = teaData.find(tea => tea.teaName === teaName);
            if (!tea) return null;
            return (
              <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image
                    src={tea.imageLink}
                    width={400}
                    height={400}
                    style={{ maxWidth: 'none', height: '400px' }}
                    alt="Tea Image"
                  />
                </Card.Section>

                <Group justify="space-between" mt="md" mb="xs">
                  <Text fw={500}>{tea.teaName}</Text>
                  <Badge color="taupe">{tea.benefit}</Badge>
                  <Button color="red" onClick={() => handleRemove(teaName)}>Remove</Button>
                </Group>

                <Text size="sm" c="dimmed">
                  {`This tea is a ${tea.type} tea which takes ${tea.steepTime} to steep. The tea is originated from ${tea.origin} and has a ${tea.flavor} flavour with a ${tea.caffeineLevel} caffeine level.`}
                </Text>

                <Button color="sage" fullWidth mt="md" radius="md" onClick={() => {/* handle tea click */ }} style={{ cursor: 'pointer' }}>
                  View
                </Button>
              </Card>
            );
          })}
        </div>
      </Stack>
    </main>
  );
}
