import React from 'react';
import { Card, Avatar, Text, Group, useMantineTheme } from '@mantine/core';
import { IconLink, IconBrandLinkedin } from '@tabler/icons-react';

const IconWrapper: React.FC<IconWrapperProps> = ({ children, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" style={{
    borderRadius: '100px',
    background: 'rgba(230, 204, 178, 0.25)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '36px',
    height: '36px',
    cursor: 'pointer',
  }}>
    {children}
  </a>
);

export default function ProfileCard({ name, role, image, portfolioLink, linkedinLink }: ProfileCardProps) {
  const theme = useMantineTheme(); 

  return (
    <Card
      shadow="none"
      radius="md"
      style={{
        width: 240,
        backgroundColor: 'var(--seasalt)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid rgba(63, 57, 53, 0.25)',
      }}
    >
      <Avatar
        src={image}
        alt={name}
        size="xl"
        radius="100"
        style={{ marginTop: '24px', alignSelf: 'center' }}
      />
      <Text style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 700, color: 'var(--taupe)',}}>
        {name}
      </Text>
      <Text size="sm" style={{ marginBottom: '24px', fontWeight: 500, color: 'var(--taupe)', }}>
        {role}
      </Text>
      <Group style={{ marginTop: '24px' }}> 
        <IconWrapper href={portfolioLink}>
          <IconLink size={24} stroke={1.5} color={'#3F3935'} />
        </IconWrapper>
        <IconWrapper href={linkedinLink}>
          <IconBrandLinkedin size={24} stroke={1.5} color={'#3F3935'} />
        </IconWrapper>
      </Group>
    </Card>
  );
}
