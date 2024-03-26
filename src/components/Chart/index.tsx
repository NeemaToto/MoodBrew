import { Stack, Text, Container } from "@mantine/core";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Tea Consumption for Canadians (%)",
    },
  },
};

const labels = ["Gender"];

export const data = {
  labels,
  datasets: [
    {
      label: "Men",
      data: [41, 100],
      backgroundColor: "rgba(135,206,250, 0.5)",
    },
    {
      label: "Women",
      data: [55],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export default function Chart() {
  return (
    <>
      <Stack justify="center" align="center" h={600}>
        <Text ta="center" fw={700} size="2.25rem">
          Want to learn a quick fact?
        </Text>
        <Text ta="center" style={{ color: "var(--taupe)" }}>
          55% of Canadian women are tea drinkers compared to 41% of Canadian
          men.
        </Text>
        <Container w="70vw" h="60vw" style={{minWidth: '20rem', minHeight: '20rem'}}>
          <Bar data={data} options={options} />
        </Container>
      </Stack>
    </>
  );
}
