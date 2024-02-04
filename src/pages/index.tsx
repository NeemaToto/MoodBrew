import { Button } from '@mantine/core'

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <Button color="blue">Button</Button>
     <p style={{fontFamily: 'Satoshi', fontWeight: '300'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati nulla neque unde reiciendis voluptate itaque dolorem saepe excepturi? Dolor sint, ipsam asperiores aut natus id recusandae nemo ad accusantium quo.</p>
    </main>
  )
}
