import React from "react";
import { Paper, Text, Title } from "@mantine/core";
import '@mantine/carousel/styles.css';
import classes from './reviewCard.module.css'


interface CardProps {
    pfp: string;
    name: string;
    rating: string;
    desc: string;
}

export default function ReviewCard({ pfp, name, rating, desc }: CardProps) {
    return (

        <Paper shadow="md" p="xl" radius="sm" className={classes.card}>

            <div>
                <span className={``}>
                {pfp && (
                    <img src={pfp} alt={`Profile of ${name}`} style={{ width: '50px', height: '50px' }} />
                )}
                </span>
                <Title c="taupe" order={3} className={classes.title}>
                    {name}
                </Title>
                <span>
                    {rating}
                </span>
            </div>
            <div>
                <Text>
                    {desc}
                </Text>
            </div>

        </Paper>
    )
}