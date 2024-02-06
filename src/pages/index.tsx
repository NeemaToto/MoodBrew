import { Button, Text} from '@mantine/core'
import { Header } from '../components/Header'
export default function Home() {
  return (
    <div style={{padding: '52px'}}>
      <Header />
      <main className={``}>
        
        <Button size='sm'>Button</Button>
       <Text size='sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati nulla neque unde reiciendis voluptate itaque dolorem saepe excepturi? Dolor sint, ipsam asperiores aut natus id recusandae nemo ad accusantium quo.</Text>
      </main>
    </div>
      
  )
}
