import React from "react";
import { Paper, Text, Title } from "@mantine/core";
import '@mantine/carousel/styles.css';
import classes from './recipeCard.module.css'


interface CardProps {
    title: string;
    ingredients: string;
    servings: string;
    instructions: string;
}


export default function RecipeCard({ title, ingredients, instructions, servings }: CardProps) {

    return (

        <Paper shadow="md" p="xl" radius="sm" className={classes.card}>

            <div>
                <Title c="taupe" order={3} className={classes.title}>
                    {title}
                </Title>
                <span>
                    {ingredients}
                </span>
            </div>
            <div>
                <span>
                    {servings}
                </span>
                <Text>
                    {instructions}
                </Text>
            </div>
        </Paper>
    )
}