import React from 'react'
import classes from './Hero.module.css'
import { TextInput, ActionIcon } from '@mantine/core'
import { IconSearch, IconArrowRight } from '@tabler/icons-react'

export default function Hero() {
  return (
    <div className={classes.main}>
        <div className={classes.bigScreen}>
        <TextInput
            autoComplete="off"
            className={classes.searchBar}
            h={0}
            icon={<IconSearch size={8} stroke={1.5} />}
            radius="lg"
            size="lg"
            rightSection={
            <ActionIcon size={32} radius="xl" color="sage" variant="filled">
                {<IconArrowRight size={30} stroke={1.5} />}
            </ActionIcon>
            }
            placeholder="search"
            rightSectionWidth={42}
        />
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 1336 718"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            d="M387 68.5C400.807 68.5 412 57.3071 412 43.5V25C412 11.1929 423.193 0 437 0H1311C1324.81 0 1336 11.1929 1336 25V693C1336 706.807 1324.81 718 1311 718H25C11.1929 718 0 706.807 0 693V93.5C0 79.6929 11.1929 68.5 25 68.5H207H387Z"
            fill="#C4C4C4"
            />
            <path
            d="M387 68.5C400.807 68.5 412 57.3071 412 43.5V25C412 11.1929 423.193 0 437 0H1311C1324.81 0 1336 11.1929 1336 25V693C1336 706.807 1324.81 718 1311 718H25C11.1929 718 0 706.807 0 693V93.5C0 79.6929 11.1929 68.5 25 68.5H207H387Z"
            fill="#C4C4C4"
            />
        </svg>
        </div>
        <div className={classes.smallScreen}>
            <TextInput
                autoComplete="off"
                className={classes.searchBar}
                h={0}
                icon={<IconSearch size={8} stroke={1.5} />}
                radius="lg"
                size="lg"
                rightSection={
                <ActionIcon size={32} radius="xl" color="sage" variant="filled">
                    {<IconArrowRight size={30} stroke={1.5} />}
                </ActionIcon>
                }
                placeholder="search "
                rightSectionWidth={42}
            />
            <div className={classes.heroImage2}>

            </div>
        </div>
    </div>
  );
}
