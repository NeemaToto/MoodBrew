import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Card, Image, Text, Badge, Button, Group, Pagination } from '@mantine/core';
import styles from './teaCard.module.css'

export default function TeaCard({ searchTerm }: TeaCardProps) {
  const router = useRouter();
  const [teaData, setTeaData] = useState<Tea[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 9;

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

  const defaultImageLink = "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png";

  const handleTeaClick = (tea: Tea) => {
    router.push({
      pathname: '/tea',
      query: { ...tea },
    });
  };

  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
  const currentTeas: Tea[] = filteredTeas.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages: number = Math.ceil(filteredTeas.length / itemsPerPage);

  return (
    <>
      <Group justify='center' align='center'>
        <div className={styles.grid}>
        {currentTeas.map((tea, index) => (
          <Card key={index} shadow="sm" padding="lg" radius="md" withBorder onClick={() => handleTeaClick(tea)} style={{ cursor: 'pointer' }}>
            <Card.Section>
              <Image
                src={tea.imageLink || defaultImageLink}
                width={400}
                height={400}
                style={{ maxWidth: 'none', height: '400px' }}
                alt="Tea Image"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>{tea.teaName}</Text>
              <Badge color="taupe">{tea.benefit}</Badge>
            </Group>

            <Text size="sm" c="dimmed">
              {`This tea is a ${tea.type} tea which takes ${tea.steepTime} to steep. The tea is originated from ${tea.origin} and has a ${tea.flavor} flavour with a ${tea.caffeineLevel} caffeine level.`}
            </Text>

            <Button color="sage" fullWidth mt="md" radius="md">
              View
            </Button>
          </Card>
        ))}
        </div>
        <Pagination
          total={totalPages}
          value={currentPage}
          onChange={setCurrentPage}
          style={{ userSelect: 'none' }}
        />
      </Group>
    </>
  );
}
