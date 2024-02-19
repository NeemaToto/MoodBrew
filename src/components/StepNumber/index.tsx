import { Flex, Group, Text } from "@mantine/core";


export default function StepNumber({
    stepNumber = '',
    text = ''
}) {

    return (
        <Group>
            <Flex
                bg='sage'
                p={10}
                justify="center"
                align='center'
                style={{ borderRadius: '100px', userSelect: 'none' }}
                w={44}
                h={44}
            >
                <Text c='seasalt' size="lg">
                    {stepNumber}
                </Text>
            </Flex>
            <Text size="lg">
                {text}.
            </Text>
        </Group>
    )
}