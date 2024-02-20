import { Flex, Group, Text } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';


export default function StepNumber({
    stepNumber = '',
    text = ''
}) {
    const isSmallScreen = useMediaQuery('(max-width: 500px)');

    return (
        <Flex gap={10} align="center" justify={isSmallScreen ? 'center' : 'flex-start'} direction={isSmallScreen ? 'column' : 'row'}>
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
        </Flex>
    )
}