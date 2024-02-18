import { Button, Text, Stack, Title, rem } from '@mantine/core'
import FAQ from '@/components/FAQ'
import TeaCard from '@/components/teaCard'
import classes from '@/styles/Home.module.css'

export default function Home() {
  return (
      <main className={``}>
        <Stack gap="sm">
          <Title c="taupe" order={1}>
            Brew Your Mood
          </Title>
          <Text c="taupe" size='lg'>
          Explore Over 100 Unique Tea Suggestions Tailored for Health and Mood.
          </Text>
        </Stack>
        <Text c='taupe' size='sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati nulla neque unde reiciendis voluptate itaque dolorem saepe excepturi? Dolor sint, ipsam asperiores aut natus id recusandae nemo ad accusantium quo.</Text>
        <FAQ />
      </main>

  )
}


/*        <TeaCard/>
        <Button size='sm' color='sage'>Button</Button>
        <Button size='sm' color='taupe'>Button</Button>
        <Button size='sm' color='dun'>Button</Button>*/