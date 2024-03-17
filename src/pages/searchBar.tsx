import {
  TextInput,
  rem,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import classes from '../styles/NavbarSearch.module.css';

export default function NavbarSearch() {


  return (
    <div className={classes.bghome}>
      <TextInput
        className={classes.input}
        placeholder="Search"
        size="xl"
        rightSectionWidth={70}
        rightSection={<IconSearch style={{ width: rem(20), height: rem(20), marginLeft: rem(65) }} stroke={1.5} />}
        styles={{ section: { pointerEvents: 'none' } }}
        mb="sm"
      />
    </div>
  );
}