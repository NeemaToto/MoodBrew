import { TextInput, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import classes from "../styles/NavbarSearch.module.css";

export default function NavbarSearch() {
  return (
    <div className={classes.bghome}>
      <TextInput
        className={classes.input}
        placeholder="Search"
        size="xl"
        rightSection={
          <IconSearch
            stroke={1.5}
          />
        }
        styles={{ section: { pointerEvents: "none" } }}
        mb="sm"
      />
    </div>
  );
}
