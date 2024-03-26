import { useEffect, useState } from "react";
import { Title, rem, Stack } from "@mantine/core";
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import classes from './recipeCarousel.module.css'
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import RecipeCard from "../RecipeCard";
import axios from "axios";
import { useRouter } from "next/router";

interface Recipe {
    title: string;
    ingredients: string[];
    instructions: string;
    servings: string
}

export default function RecipeCarousel() {

    const [recipes, setRecipes] = useState<Recipe[]>([])
    const router = useRouter();
    const { teaName } = router.query;

    

    useEffect(() => {
        if (!teaName) return;

        const fetchRecipes = async () => {
            try {
                const response = await axios.get(`https://api.api-ninjas.com/v1/recipe?query=${teaName}`, {
                    headers: {
                        'X-API-KEY': 'oaPOJKJa3+1l1592JDWYwg==nqddLuGK08t7Algo'
                    }
                })
                setRecipes(response.data.slice(0, 4));
                console.log(response.data);
            } catch (error) {
                console.error('Failed to fetch recipes', error)
            }
        }

        fetchRecipes();
    }, [teaName])


    return (
        <Stack align="center" gap={100} pb={100} className={``}>
            <Title order={2}>Recipe Suggestions</Title>
            <Carousel
                withIndicators
                nextControlIcon={<IconArrowRight style={{ width: rem(16), height: rem(16)}} />}
                previousControlIcon={<IconArrowLeft style={{ width: rem(16), height: rem(16)}} />}
                height={325}
                style={{ flex: 1 }}
                slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
                slideGap={{ base: 0, sm: 'md' }}
                align="start"
                slidesToScroll={2}
                classNames={classes}
            >
                {recipes.map((recipe, index)=> (
                    <Carousel.Slide key={index}>
                        <RecipeCard
                        title={recipe.title}
                        ingredients={recipe.ingredients}
                        instructions={recipe.instructions}
                        servings={recipe.servings}
                        />
                    </Carousel.Slide>
                ))}
            </Carousel>

        </Stack>

    )
}