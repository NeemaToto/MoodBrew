import { IconPlus, IconMug, IconTeapot, IconUserQuestion, IconDatabaseSearch} from '@tabler/icons-react'
import { Accordion, Flex, rem, Stack, Title, Text, } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './FAQ.module.css';


export default function FAQ() {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  
  return (
      <div className={classes.faq}>
        <Flex 
          style={{ display: 'flex' }}
          direction="column"
          align="center"
          justify="center"
          gap={isSmallScreen ? rem(24) :rem(64)}
          pt={rem(80)}
          pb = {isSmallScreen ? rem(40) : rem(80)}
          >
          <Stack gap= {rem(0.5)} align="center" justify="center" style={{ textAlign: 'center', width: '80%' }} >
            <Text c="taupe" size='md'  fw={700}>
              Support
            </Text>
            <Stack >
              <Title c="taupe" order={2}  fw={700}>
                Frequently asked
              </Title>
              <Text c="taupe"  size = {isSmallScreen ? "sm" : "md"}>
                Explore our FAQs to learn more about how MoodBrew personalizes tea recommendations for your mood and health.
              </Text>     
            </Stack>
          </Stack>
          <Accordion
            classNames={{ chevron: classes.chevron }}
            chevron={<IconPlus className={classes.icon} />}
          >
            <Flex
              gap={isSmallScreen ? 0 : 64}
              direction={isSmallScreen ? 'column' : 'row'}
            >
              <Stack>
                <Accordion.Item value="what">
                  <Accordion.Control
                    icon={
                      <IconMug
                        style={{
                          color: "var(--taupe)",
                          width: rem(20),
                          height: rem(20),
                        }}
                      />
                    }
                  >
                    What Is MoodBrew?
                  </Accordion.Control>
                  <Accordion.Panel>MoodBrew is a appMoodBrew is a appsssssssssssssssssssssssssssssssssssssssMoodBrew is a appsssssssssssssssssssssssssssssssssssssssMoodBrew is a appsssssssssssssssssssssssssssssssssssssssMoodBrew is a appsssssssssssssssssssssssssssssssssssssss</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="recommend">
                  <Accordion.Control
                    icon={
                      <IconTeapot
                        style={{
                          color: "var(--taupe)",
                          width: rem(20),
                          height: rem(20),
                        }}
                      />
                    }
                  >
                    What Should I Do If I Don’t Like A Tea Recommended By MoodBrew?
                  </Accordion.Control>
                  <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item>
              </Stack>
              <Stack>
                <Accordion.Item value="how">
                  <Accordion.Control
                    icon={
                      <IconDatabaseSearch
                        style={{
                          color: "var(--taupe)",
                          width: rem(20),
                          height: rem(20),
                        }}
                      />
                    }
                  >
                    How Does MoodBrew Work?
                  </Accordion.Control>
                  <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="quality">
                  <Accordion.Control
                    icon={
                      <IconUserQuestion
                        style={{
                          color: "var(--taupe)",
                          width: rem(20),
                          height: rem(20),
                        }}
                      />
                    }
                  >
                    How Do We Ensure the Quality and Safety of the Teas Recommended?
                  </Accordion.Control>
                  <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item>
              </Stack>
            </Flex>
          </Accordion>
        </Flex>
      </div>
  );
}


/*
    <Flex>

        <Accordion
          classNames={{ chevron: classes.chevron }}
          chevron={<IconPlus className={classes.icon} />}
        >
          <Accordion.Item value="what">
            <Accordion.Control
              icon={
                <IconMug
                  style={{
                    color: "var(--taupe)",
                    width: rem(20),
                    height: rem(20),
                  }}
                />
              }
            >
              What Is MoodBrew?
            </Accordion.Control>
            <Accordion.Panel>Content</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="recommend">
            <Accordion.Control
              icon={
                <IconTeapot
                  style={{ color: "var(--taupe)", 
                  width: rem(20), 
                  height: rem(20) }}
                />
              }
            >
              What Should I Do If I Don’t Like A Tea Recommended By MoodBrew?
            </Accordion.Control>
            <Accordion.Panel>Content</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <Accordion
        classNames={{ chevron: classes.chevron }}
        chevron={<IconPlus className={classes.icon} />}
      >
        <Accordion.Item value="how">
          <Accordion.Control
            icon={
              <IconDatabaseSearch
                style={{
                  color: "var(--taupe)",
                  width: rem(20),
                  height: rem(20),
                }}
              />
            }
          >
            How Does MoodBrew Work?
          </Accordion.Control>
          <Accordion.Panel>Content</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="quality">
          <Accordion.Control
            icon={
              <IconUserQuestion
                style={{
                  color: "var(--taupe)",
                  width: rem(20),
                  height: rem(20),
                }}
              />
            }
          >
            How Do We Ensure the Quality and Safety of the Teas Recommended?
          </Accordion.Control>
          <Accordion.Panel>Content</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Flex>
  */