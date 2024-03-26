import { Group, Stack, Title, rem} from "@mantine/core";
import StepNumber from "@/components/StepNumber";
import TeaInfo from "@/components/TeaInfo";
import Image from 'next/image'
import { useRouter } from "next/router";
import { useMediaQuery } from '@mantine/hooks';
import RecipeCarousel from "@/components/RecipeCarousel";

export default function Tea() {
  const isMediumScreen = useMediaQuery('(max-width: 1307px)');
  const isSmallScreen = useMediaQuery('(max-width: 500px)');


    const router = useRouter();
    const { teaName, type, steepTime, origin, benefit, flavor, caffeineLevel, imageLink } = router.query;
  
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

            {/*Not fully responsive yet*/}
            <Group
                gap={10}
                style={{ flexGrow: 'grow', borderRadius: '12px'}}
                justify={isMediumScreen ? 'space-around' : 'space-between'}
                bg='dun.1'
            >
                <Stack
                    gap={40}
                    h={494}
                    justify="center"
                    ta={isSmallScreen ? "center" : 'start'}
                  
                    p={isSmallScreen ? 40 : 40}
                >
                    <Title order={2}>
                        Instructions
                    </Title>
                    <StepNumber stepNumber="1" text={`Steep tea for ${steepTime}`} />
                    <StepNumber stepNumber="2" text={`Enjoy`} />
                </Stack>
                <Image src={imageLink as string} layout="repsonsive" width={800} height={800} alt="picture"  style={{borderRadius: '12px'}} />
            </Group>

            <Stack justify="center" align="center" gap={100}>
                <Title order={2}>
                    Information
                </Title>
                <Group justify="space-evenly" align="center" gap={30} w='80vw'>
                    <TeaInfo icon='/icons/caffeineIcon.svg' title='Caffeine Level' text={caffeineLevel?.toString()} />
                    <TeaInfo icon='/icons/typeOfTeaIcon.svg' title='Type of Tea' text={type?.toString()} />
                    <TeaInfo icon='/icons/flavorIcon.svg' title='Flavor' text={flavor?.toString()} />
                    <TeaInfo icon='/icons/benefitIcon.svg' title='Benefit' text={benefit?.toString()} />
                </Group>
            </Stack>

            
            <Stack>
                <RecipeCarousel/>
            </Stack>
        </Stack>
    )
}