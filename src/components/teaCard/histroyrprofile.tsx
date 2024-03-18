import React, { useEffect, useState } from 'react';
import TeaCard from '@/components/teaCard';
import { Text, Title, Stack, Grid } from '@mantine/core'; // Import Grid from Mantine

export default function Profile() {
  const [savedTeas, setSavedTeas] = useState<string[]>([]);

  useEffect(() => {
    const savedTeasFromStorage = JSON.parse(localStorage.getItem('savedTeas') || '[]');
    setSavedTeas(savedTeasFromStorage);
  }, []);

  return (
    <main className={``}>
      <Stack gap="sm">
        <Title c="taupe" order={1} fw={800}>
          Your Teas
        </Title>
        <Grid columns={3}> 
          {savedTeas.map((teaName: string, index: number) => (
            <TeaCard searchTerm={teaName} key={index} />
          ))}
        </Grid>
      </Stack>
    </main>
  );
}
