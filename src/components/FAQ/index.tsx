import { Icon } from '@iconify/react'
import { Accordion, Flex } from '@mantine/core';
import classes from './FAQ.module.css';


export default function FAQ() {

const questions = [{


    one : {
        question: 'What is my name?',
        answer: 'Neema'
    }
}
]

    const items = questions.map((item, index) => (
        <Accordion.Item key={index} value={item.one.question}>
          <Accordion.Panel>{item.one.answer}</Accordion.Panel>
        </Accordion.Item>
      ));

    return (
        <Flex
            mih={50}
            bg="rgba(0, 0, 0, .3)"
            gap="md"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
        >
 <Accordion
      defaultValue="Apples"
      classNames={{ chevron: classes.chevron }}
    >
      {items}
    </Accordion>
        </Flex>
    )
}