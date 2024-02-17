import { Button, Text, rem } from '@mantine/core'
import { Header } from '../components/Header'
import FAQ from '@/components/FAQ'
import TeaCard from '@/components/teaCard'

export default function Home() {
  return (
    <div style={{ paddingLeft: rem(52), paddingRight: rem(52) }}>
      <Header />
      <TeaCard/>
      <main className={``}>
        <Button size='sm' color='sage'>Button</Button>
        <Button size='sm' color='taupe'>Button</Button>
        <Button size='sm' color='dun'>Button</Button>
        <Text c='taupe' size='sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati nulla neque unde reiciendis voluptate itaque dolorem saepe excepturi? Dolor sint, ipsam asperiores aut natus id recusandae nemo ad accusantium quo.</Text>
      <FAQ />
      </main>
    </div>

  )
}
