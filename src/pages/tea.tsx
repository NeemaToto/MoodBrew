import { Flex, Group, Stack, Title, Text, Container, BackgroundImage } from "@mantine/core";
import StepNumber from "@/components/StepNumber";
import TeaInfo from "@/components/TeaInfo";
import Image from 'next/image'

export default function Tea({
    teaName = 'Early Grey Tea',
    type = 'black',
    steepTime = '3 min',
    origin = 'England',
    benefit = 'soothing',
    flavor = 'earthy',
    caffeineLevel = 'High',
    teaImage = ''
}) {

    return (
        <Stack
            justify="center"
            align="center"
            gap={150}
           
        >
            <Stack
                justify="center"
                align="center"
                gap={20}
            >
                <Title c='taupe' order={1} ta='center'>
                    {teaName}
                </Title>
                <Title c='taupe' order={4} ta='center'>
                    Originally from {origin}, this {type} tea has <br /> {benefit} properties.
                </Title>
            </Stack>

            <Group
                gap={10}
                w='100%'
                style={{ flexGrow: 'grow', borderRadius: '12px'}}
                justify="space-between"
                bg='dun.1'
            >
                <Stack
                    gap={40}
                    h={494}
                    justify="center"
                    pl={30}

                >
                    <Title order={2}>
                        Instructions
                    </Title>
                    <StepNumber stepNumber="1" text={`Steep tea for ${steepTime}`} />
                    <StepNumber stepNumber="2" text={`Enjoy`} />
                </Stack>

                <Image src='https://assets.catawiki.nl/assets/2017/1/4/2/a/e/2aec93cc-d282-11e6-8b8d-2074d42eaa65.jpg' layout="repsonsive" width={1000} height={1000} alt="picture"  style={{borderRadius: '12px'}} />
            </Group>

            <Stack justify="center" align="center" gap={100} pb={100}>
                <Title order={2}>
                    Information
                </Title>
                <Group justify="space-evenly" align="center" gap={30} w='80vw'>
                    <TeaInfo icon='/icons/caffeineIcon.svg' title='Caffeine Level' text={caffeineLevel} />
                    <TeaInfo icon='/icons/typeOfTeaIcon.svg' title='Type of Tea' text={type} />
                    <TeaInfo icon='/icons/flavorIcon.svg' title='Flavor' text={flavor} />
                    <TeaInfo icon='/icons/benefitIcon.svg' title='Benefit' text={benefit} />
                </Group>
            </Stack>

            {/*insert reviews here*/}
        </Stack>
    )
}