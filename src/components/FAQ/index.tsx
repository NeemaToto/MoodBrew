import React, { useState } from 'react';
import { IconMug, IconTeapot, IconUserQuestion, IconDatabaseSearch } from '@tabler/icons-react';
import { Accordion, Flex, rem, Stack, Title, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './FAQ.module.css';

export default function FAQ() {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  // const [openedItem, setOpenedItem] = useState('');

  // const handleToggle = (value) => {
  //   setOpenedItem(openedItem === value ? '' : value);
  // };

  // const renderIcon = (item) => openedItem === item ? <IconMinus style={{ color: "var(--taupe)" }} /> : <IconPlus style={{ color: "var(--taupe)" }} />;

  return (
    <div className={classes.faq}>
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap={isSmallScreen ? rem(24) : rem(64)}
        pt={rem(80)}
        pb={isSmallScreen ? rem(40) : rem(80)}
      >
        <Stack
          gap={rem(0.5)}
          align="center"
          justify="center"
          style={{ textAlign: "center", width: "80%" }}
        >
          <Text size="md" style={{ color: "var(--taupe)", fontWeight: 700 }}>
            Support
          </Text>
          <Stack>
            <Title order={2} style={{ color: "var(--taupe)", fontWeight: 700 }}>
              Frequently asked
            </Title>
            <Text size={isSmallScreen ? "md" : "md"} style={{ color: "var(--taupe)", maxWidth: 700 }}>
              Explore our FAQs to learn more about how MoodBrew personalizes tea
              recommendations for your mood and health.
            </Text>
          </Stack>
        </Stack>
        <Accordion>
          <Flex
            gap={isSmallScreen ? 0 : 64}
            direction={isSmallScreen ? "column" : "row"}
          >
            <Stack>
              <Accordion.Item value="what" style={{ borderBottom: '1px solid var(--taupe)' }}>
                <Accordion.Control
                  icon={<IconMug style={{ color: "var(--taupe)", width: rem(20), height: rem(20) }} />}
                  // rightSection={renderIcon("what")}
                >
                  <Text style={{ fontWeight: 700, color: "var(--taupe)" }} pr="md">
                    What Is MoodBrew?
                  </Text>
                </Accordion.Control>
                <Accordion.Panel
                  style={{
                    maxWidth: "600px",
                    overflow: "auto",
                    paddingLeft: "2rem",
                    paddingRight: "3rem",
                  }}
                >
                  MoodBrew is a revolutionary platform designed to personalize
                  and enhance your tea experience based on your unique
                  preferences and mood.
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="recommend" style={{ borderBottom: '1px solid var(--taupe)' }}>
                <Accordion.Control
                  icon={<IconTeapot style={{ color: "var(--taupe)", width: rem(20), height: rem(20) }} />}
                  // rightSection={renderIcon("recommend")}
                >
                  <Text style={{ fontWeight: 700, color: "var(--taupe)" }} pr="md">
                    What Should I Do If I Don’t Like A Tea Recommended By
                    MoodBrew?
                  </Text>
                </Accordion.Control>
                <Accordion.Panel
                  style={{
                    maxWidth: "600px",
                    overflow: "auto",
                    paddingLeft: "2rem",
                    paddingRight: "3rem",
                  }}
                >
                  If a tea recommended by MoodBrew doesn't suit your taste,
                  explore alternative options from their diverse selection to
                  find one that aligns better with your preferences. Providing
                  feedback to MoodBrew about your experience can help refine
                  future recommendations and improve the platform's accuracy.
                  Experimenting with different brewing methods and engaging with
                  MoodBrew's educational resources can also enhance your
                  tea-drinking journey and help you discover new favorites.
                </Accordion.Panel>
              </Accordion.Item>
            </Stack>
            <Stack>
              <Accordion.Item value="how" style={{ borderBottom: '1px solid var(--taupe)' }}>
                <Accordion.Control
                  icon={<IconDatabaseSearch style={{ color: "var(--taupe)", width: rem(20), height: rem(20) }} />}
                  // rightSection={renderIcon("how")}
                ><Text style={{ fontWeight: 700, color: "var(--taupe)" }} pr="md">
                How Does MoodBrew Work?
              </Text>
            </Accordion.Control>
            <Accordion.Panel
              style={{
                maxWidth: "600px",
                overflow: "auto",
                paddingLeft: "2rem",
                paddingRight: "3rem",
              }}
            >
              MoodBrew operates by capturing your emotional state and
              preferences, then offering sustainable tea recommendations
              tailored to address them. With a vast database comprising
              hundreds of options, MoodBrew ensures you find the perfect
              match for your mood, providing a personalized and enriching
              tea experience.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="quality" style={{ borderBottom: '1px solid var(--taupe)' }}>
            <Accordion.Control
              icon={<IconUserQuestion style={{ color: "var(--taupe)", width: rem(20), height: rem(20) }} />}
              // rightSection={renderIcon("quality")}
            >
              <Text style={{ fontWeight: 700, color: "var(--taupe)" }} pr="md">
                How Do We Ensure the Quality and Safety of the Teas
                Recommended?
              </Text>
            </Accordion.Control>
            <Accordion.Panel
              style={{
                maxWidth: "600px",
                overflow: "auto",
                paddingLeft: "2rem",
                paddingRight: "3rem",
              }}
            >
              To ensure the quality and safety of the teas recommended by
              MoodBrew, we adhere to stringent standards and practices at
              every stage of the process. Here's how we guarantee the
              excellence of our teas.
            </Accordion.Panel>
          </Accordion.Item>
        </Stack>
      </Flex>
    </Accordion>
  </Flex>
</div>
);
}