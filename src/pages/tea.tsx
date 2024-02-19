import TeaCard from "@/components/teaCard";
import { Flex, Group, Stack, Title, Text } from "@mantine/core";
import Image from 'next/image'
import { IconNumber1 } from '@tabler/icons-react';
import StepNumber from "@/components/StepNumber";

export default function Tea({
    teaName = 'Early Grey Tea',
    type = 'black',
    steepTime = '3 min',
    origin = 'England',
    benefit = 'soothing',
    flavor = '',
    caffeineLevel = 'High',
    teaImage = ''
}) {

    return (
        <main>
            <Stack
                justify="center"
                align="center"
                gap={24}
            >

                <Stack
                    justify="center"
                    align="center"
                    gap={20}
                >
                    <Title c='taupe' order={1}>
                        {teaName}
                    </Title>
                    <Title c='taupe' order={4}>
                        Originally from {origin}, this {type} tea has {benefit} properties.
                    </Title>
                </Stack>

                <Group
              
                w='100%'
              
                >
                    <Stack
                        gap={40}
                        bg='dun.1'
                        w='40%'
                        h={494}
                        justify="center"
                        px={52}
                    >
                        <Title order={2}>
                            Instructions
                        </Title>
                        <StepNumber stepNumber="1" text={`Steep tea for ${steepTime}`} />
                        <StepNumber stepNumber="2" text={`Enjoy`} />
                    </Stack>
                    <Image src={teaImage} alt={`Picture of ${teaName}`} />
                </Group>

            </Stack>
        </main>
    )
}