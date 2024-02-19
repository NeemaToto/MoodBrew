import {
    TextInput,
    Code,
    rem,
  } from '@mantine/core';
  import { IconSearch } from '@tabler/icons-react';
  import classes from '../styles/NavbarSearch.module.css';
  
  

  
  export function NavbarSearch() {
  
  
    return (
      <div className={classes.bghome}>
        <TextInput
        className={classes.input}
          placeholder="Search"
          size="xl"
          leftSection={<IconSearch style={{ width: rem(12), height: rem(12), marginLeft: rem(90) }} stroke={1.5} />}
          rightSectionWidth={70}
          rightSection={<Code className={classes.searchCode}><img src="/arrow.png" width={20} height={20}/></Code>}
          styles={{ section: { pointerEvents: 'none' } }}
          mb="sm"
        />
      </div>
    );
  }