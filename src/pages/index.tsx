import { Button, Text, Stack, Title, rem } from '@mantine/core'
import FAQ from '@/components/FAQ'
import TeaCard from '@/components/teaCard'
import classes from '@/styles/Home.module.css'

export default function Home() {
  return (
      <main className={``}>
        <Stack gap="sm">
          <Title c="taupe" order={1} fw={800}>
            Brew Your Mood
          </Title>
          <Text c="taupe" size='lg'>
          Explore Over 100 Unique Tea Suggestions Tailored for Health and Mood.
          </Text>
        </Stack>
        <FAQ />
      </main>

  )
}


/*        <TeaCard/>
        <Button size='sm' color='sage'>Button</Button>
        <Button size='sm' color='taupe'>Button</Button>
        <Button size='sm' color='dun'>Button</Button>*/