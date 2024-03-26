import { Button, Text, Stack, Title, rem } from '@mantine/core'
import FAQ from '@/components/FAQ'
import TeaCard from '@/components/teaCard'
import Image from 'next/image'
import classes from '@/styles/Home.module.css'
import  NavbarSearch  from './searchBar'
import Chart from '@/components/Chart'

export default function Home() {
  return (
    <main className={``}>
      <Stack gap="sm">
        <div>
          <Title c="taupe" order={1} fw={800}>
            Mood Brew
          </Title>
          <Text c="taupe" size='lg'>
            Explore Over 100 Unique Tea Suggestions Tailored for Health and Mood.
          </Text>
        </div>
      </Stack>
      <div>
        <div className=''>
          <NavbarSearch/>
        </div>
      </div>
      <FAQ />
      <Chart />
    </main>

  )
}

/*        <TeaCard/>
        <Button size='sm' color='sage'>Button</Button>
        <Button size='sm' color='taupe'>Button</Button>
        <Button size='sm' color='dun'>Button</Button>*/