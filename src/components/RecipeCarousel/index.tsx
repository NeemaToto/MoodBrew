import { useEffect, useState } from "react";
import { Title, Stack } from "@mantine/core";
import '@mantine/carousel/styles.css';
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
                setRecipes(response.data.slice(0, 3));
                console.log(response.data);
            } catch (error) {
                console.error('Failed to fetch recipes', error)
            }
        }

        fetchRecipes();
    }, [teaName])


    return (
        <Stack align="center" justify="center" gap={50} pb={100}>
            <Title order={2}>Recipe Suggestions</Title>

            {recipes.length > 0 ? (
                recipes.map((recipe, index) => (
                    <RecipeCard
                        key={index}
                        title={recipe.title}
                        ingredients={recipe.ingredients} 
                        instructions={recipe.instructions}
                        servings={recipe.servings}
                    />
                ))
            ) : (
                <Title order={4}>No recipes available.</Title> 
            )}
            
        </Stack>
    )
}

/* 
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
*/