import { Button, Text, rem } from '@mantine/core'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <div style={{ paddingLeft: rem(52), paddingRight: rem(52) }}>
      <Header />
      <main className={``}>
        <Button size='sm' color='sage'>Button</Button>
        <Button size='sm' color='taupe'>Button</Button>
        <Button size='sm' color='dun'>Button</Button>
        <Text c='taupe' size='sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati nulla neque unde reiciendis voluptate itaque dolorem saepe excepturi? Dolor sint, ipsam asperiores aut natus id recusandae nemo ad accusantium quo.</Text>
      </main>
    </div>

  )
}
