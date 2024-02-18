import { IconPlus, IconMug, IconTeapot, IconUserQuestion, IconDatabaseSearch} from '@tabler/icons-react'
import { Accordion, Flex, rem, Stack, Title, Text } from '@mantine/core';
import classes from './FAQ.module.css';


export default function Demo() {
  return (
    <div className={classes.faq} >
      <Stack gap="sm" align="center" justify="center" style={{ textAlign: 'center', width: '80%' }} >
        <Title c="taupe" order={4}>
          Support
        </Title>
        <Stack>
          <Title c="taupe" order={2}>
            Frequently asked
          </Title>
          <Text c="taupe"  size="md">
            Explore our FAQs to learn more about how MoodBrew personalizes tea recommendations for your mood and health.
          </Text>     
        </Stack>
      </Stack>
      <Accordion
        classNames={{ chevron: classes.chevron }}
        chevron={<IconPlus className={classes.icon} />}
      >
        <Flex
          gap={64}
          direction="row"
          pt = {rem(64)}
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
              <Accordion.Panel>Content</Accordion.Panel>
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