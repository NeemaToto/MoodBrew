import React from "react";
import { Stack, Title, Text } from "@mantine/core";
import classes from "@/styles/About.module.css";
import ProfileCard from '@/components/ProfileCard';
import FAQ from "@/components/FAQ";

const teamMembers = [
  {
    name: 'Kushal Kumar',
    role: 'Lead UI/UX Designer',
    image: 'kushal-image.jpg',
    portfolioLink: 'https://kushalportfolio.com',
    linkedinLink: 'https://www.linkedin.com/in/kushal-kumar-096853290/'
  },
  {
    name: 'Meelaud Totonchi',
    role: 'Software Engineer',
    image: 'meelaud-image.jpg',
    portfolioLink: 'https://meelaudportfolio.com',
    linkedinLink: 'https://www.linkedin.com/in/meelaud-totonchi/'
  },
  {
    name: 'Neema Totonchi',
    role: 'Lead Full Stack Developer',
    image: 'neema-image.jpg',
    portfolioLink: 'https://neemaportfolio.com',
    linkedinLink: 'https://www.linkedin.com/in/neema-totonchi/'
  },
  {
    name: 'Olivia Fong',
    role: 'Lead Product Designer',
    image: '/olivia-image.jpg',
    portfolioLink: 'https://oliviask.com',
    linkedinLink: 'https://www.linkedin.com/in/oliviaskfong/'
  },
  {
    name: 'Patrick Hui',
    role: 'Product Designer',
    image: '/patrick-image.jpg',
    portfolioLink: 'https://patrickportfolio.com',
    linkedinLink: 'https://www.linkedin.com/in/patrick-hui-design/'
  },
];

export default function About() {
  const firstRowMembers = teamMembers.slice(0, 3);
  const secondRowMembers = teamMembers.slice(3);

  return (
    <main className={classes.main}>
      <Stack align="center" className={classes.stack}>
        <Text component="h2" className={`${classes.subtitle} subtitle`}>
          OUR TEAM
        </Text>
        <Title order={1} className={classes.title}>
          MoodBrew team
        </Title>
        <Text component="p" className={classes.description} style={{ marginBottom: '4rem' }}>
          We are a small team of tea enthusiasts who believe that tea is more than just a drink; it's a way of life. Our mission is to help people discover the healing properties of tea and provide them with the knowledge they need to brew the perfect cup.
        </Text>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          {firstRowMembers.map((member, index) => (
            <ProfileCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              portfolioLink={member.portfolioLink}
              linkedinLink={member.linkedinLink}
            />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
          {secondRowMembers.map((member, index) => (
            <ProfileCard
              key={index + 3}
              name={member.name}
              role={member.role}
              image={member.image}
              portfolioLink={member.portfolioLink}
              linkedinLink={member.linkedinLink}
            />
          ))}
        </div>
        <FAQ />
      </Stack>
    </main>
  );
}