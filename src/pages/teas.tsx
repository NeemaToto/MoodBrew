import React, { useState } from "react";
import { Text, Title, Stack, TextInput } from "@mantine/core";
import TeaCard from "@/components/peacard";

export default function Teas() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className={``}>
      <Stack gap="sm">
        <Title c="taupe" order={1} fw={800}>
          Looking for a Tea?
        </Title>
        <Text c="taupe" size="lg">
          Use the search bar or navigate through our catalogue to find the
          perfect tea for your mood.
        </Text>
        <TextInput
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.currentTarget.value)}
          placeholder="Search teas..."
          style={{ marginBottom: "1rem" }}
          type="search"
        />
        <TeaCard searchTerm={searchTerm} />
      </Stack>
    </main>
  );
}
