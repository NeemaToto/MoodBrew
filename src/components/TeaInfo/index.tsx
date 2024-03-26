import { Stack, Title, Text } from "@mantine/core";
import Image from "next/image";

export default function TeaInfo({ icon = "", title = "", text = "" }) {
  return (
    <Stack gap={8} justify="center" align="center">
      <Image src={icon} width={28} height={28} alt="Tea icon" />
      <Stack gap={5} justify="center" align="center">
        <Title order={4}>{title}</Title>
        <Text size="sm">{text}</Text>
      </Stack>
    </Stack>
  );
}
