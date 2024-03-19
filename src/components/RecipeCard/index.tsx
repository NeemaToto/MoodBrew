import React from "react";
import { Paper, Text, Title, ScrollArea, Stack, Divider } from "@mantine/core";
import '@mantine/carousel/styles.css';
import classes from './recipeCard.module.css'


interface CardProps {
    title: string;
    ingredients: string[];
    servings: string;
    instructions: string;
}


export default function RecipeCard({ title, ingredients, instructions, servings }: CardProps) {

    return (

        <Paper className={classes.card}>
            <ScrollArea h={250} scrollbarSize={4}>

                <Title c="taupe" order={4}>
                    {title}
                </Title>
                <Title c="taupe" order={5}>
                    {servings}
                </Title>
                <Divider my="sm" color= 'sage' />
                <Stack>
                    <Text>
                        <Title c="taupe" order={5}>Ingredients:</Title>
                        {ingredients}
                    </Text>
                    <Text>
                        <Title c="taupe" order={5}>Instructions:</Title>
                        {instructions}
                    </Text>
                </Stack>
                
            </ScrollArea>
        </Paper>
    )
}