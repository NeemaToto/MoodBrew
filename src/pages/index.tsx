import { Button} from '@mantine/core'

export default function Home() {
  return (
      <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
        <Button  style={{fontFamily: 'Satoshi',  backgroundColor: 'var(--taupe)', fontSize: 'var(--md)', fontWeight: 'var(--bold)'}}>Button</Button>
      <p style={{fontFamily: 'Satoshi'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati nulla neque unde reiciendis voluptate itaque dolorem saepe excepturi? Dolor sint, ipsam asperiores aut natus id recusandae nemo ad accusantium quo.</p>
      </main>
  )
}
