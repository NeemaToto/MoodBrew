import React from "react";
import { rem } from "@mantine/core";
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import classes from './reviewCarousel.module.css'
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import ReviewCard from "../ReviewCard";

// Mockup Data
const data = [
    {
        pfp: "./icons/reviewIcon.svg",
        name: "bob",
        rating: "5 stars",
        desc: "so awesome wow omg so good my mood has beeen brewed"
    },
    {
        pfp: "./icons/reviewIcon.svg",
        name: "alex",
        rating: "5 stars",
        desc: "so awesome wow omg so good my mood has beeen brewed"
    },
    {
        pfp: "./icons/reviewIcon.svg",
        name: "sandy",
        rating: "5 stars",
        desc: "so awesome wow omg so good my mood has beeen brewed"
    },
    {
        pfp: "./icons/reviewIcon.svg",
        name: "ethan",
        rating: "5 stars",
        desc: "so awesome wow omg so good my mood has beeen brewed"
    },
    {
        pfp: "./icons/reviewIcon.svg",
        name: "reb",
        rating: "5 stars",
        desc: "so awesome wow omg so good my mood has beeen brewed"
    },
    {
        pfp: "./icons/reviewIcon.svg",
        name: "park",
        rating: "5 stars",
        desc: "so awesome wow omg so good my mood has beeen brewed"
    },
    {
        pfp: "./icons/reviewIcon.svg",
        name: "stark",
        rating: "5 stars",
        desc: "so awesome wow omg so good my mood has beeen brewed"
    },
]


export default function ReviewCarousel() {


    const slides = data.map((item) => {
        return <Carousel.Slide key={item.name}>
            <ReviewCard {...item} />
        </Carousel.Slide>
    });

    return (
        <div style={{ height: 300,}}>
            <Carousel
                withIndicators
                nextControlIcon={<IconArrowRight style={{ width: rem(16), height: rem(16)}} />}
                previousControlIcon={<IconArrowLeft style={{ width: rem(16), height: rem(16) }} />}
                height="100%"
                style={{ flex: 1 }}
                slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
                slideGap={{ base: 0, sm: 'lg' }}
                align="start"
                slidesToScroll={2}
                classNames={classes}
            >
                {slides}
            </Carousel>
        </div>

    )
}