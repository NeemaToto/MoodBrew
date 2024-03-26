import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Text,
  Title,
  Stack,
  Card,
  Image,
  Badge,
  Button,
  Group,
  TextInput,
} from "@mantine/core";
import { auth } from "../../firebase";
import classes from "@/styles/Profile.module.css";
import { useRouter } from "next/router";
import { handleTeaClick } from "@/components/TeaClick";

export default function Profile() {
  const [savedTeas, setSavedTeas] = useState<string[]>([]);
  const [teaData, setTeaData] = useState<Tea[]>([]);
  const [user, setUser] = useState<any | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const savedTeasFromStorage = JSON.parse(
      localStorage.getItem("savedTeas") || "[]"
    );
    setSavedTeas(savedTeasFromStorage);

    const fetchData = async () => {
      try {
        const response = await axios.get<Tea[]>(
          "https://raw.githubusercontent.com/NeemaToto/NeemaToto.github.io/main/data/tea.json"
        );
        setTeaData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleRemove = (teaName: string) => {
    const updatedSavedTeas = savedTeas.filter(
      (savedTea) => savedTea !== teaName
    );
    setSavedTeas(updatedSavedTeas);
    localStorage.setItem("savedTeas", JSON.stringify(updatedSavedTeas));
  };

  const filteredSavedTeas = savedTeas.filter((teaName) => {
    const tea = teaData.find((tea) => tea.teaName === teaName);
    if (!tea) return false;
    return (
      tea.teaName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tea.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tea.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tea.benefit.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tea.flavor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tea.caffeineLevel.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  if (!user) {
    return (
      <main className={classes.mainmsg}>
        <div className={classes.divmsg}>
          <p className={classes.txtmsg}>Login to view your teas.</p>
        </div>
      </main>
    );
  }

  return (
    <main className={``}>
      <Stack gap="sm">
        <Title c="taupe" order={1} fw={800}>
          Your Teas
        </Title>
        <TextInput
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.currentTarget.value)}
          placeholder="Search saved teas..."
          style={{ marginBottom: "1rem" }}
        />
        {filteredSavedTeas.length === 0 ? (
          <div className={classes.mainmsg}>
            <div className={classes.divmsg}>
              <p className={classes.txtmsg}>No saved teas found.</p>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1rem",
            }}
          >
            {filteredSavedTeas.map((teaName: string, index: number) => {
              const tea = teaData.find((tea) => tea.teaName === teaName);
              if (!tea) return null;
              return (
                <Card
                  key={index}
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  withBorder
                >
                  <Card.Section>
                    <Image
                      src={tea.imageLink}
                      width={400}
                      height={400}
                      style={{ maxWidth: "none", height: "400px" }}
                      alt="Tea Image"
                    />
                  </Card.Section>

                  <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>{tea.teaName}</Text>
                    <Badge color="taupe">{tea.benefit}</Badge>
                    <Button color="red" onClick={() => handleRemove(teaName)}>
                      Remove
                    </Button>
                  </Group>

                  <Text size="sm" c="dimmed">
                    {`This tea is a ${tea.type} tea which takes ${tea.steepTime} to steep. The tea is originated from ${tea.origin} and has a ${tea.flavor} flavour with a ${tea.caffeineLevel} caffeine level.`}
                  </Text>

                  <Button
                    color="sage"
                    fullWidth
                    mt="md"
                    radius="md"
                    onClick={() => handleTeaClick(router, tea)}
                    style={{ cursor: "pointer" }}
                  >
                    View
                  </Button>
                </Card>
              );
            })}
          </div>
        )}
      </Stack>
    </main>
  );
}
