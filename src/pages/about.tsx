import { Stack, Title, Text } from "@mantine/core";
import classes from "@/styles/About.module.css";
import ProfileCard from "@/components/ProfileCard";
import FAQ from "@/components/FAQ";

const teamMembers = [
  {
    name: "Kushal Kumar",
    role: "Lead UI/UX Designer",
    image: "/public/OIP.jpg",
    portfolioLink: "https://kushalk.design",
    linkedinLink: "https://www.linkedin.com/in/kushal-kumar-096853290/",
  },
  {
    name: "Meelaud Totonchi",
    role: "Software Engineer",
    image: "/public/OIP.jpg",
    portfolioLink: "https://meelaudportfolio.com",
    linkedinLink: "https://www.linkedin.com/in/meelaud-totonchi/",
  },
  {
    name: "Neema Totonchi",
    role: "Lead Full Stack Developer",
    image: "/public/OIP.jpg",
    portfolioLink: "https://neemaportfolio.com",
    linkedinLink: "https://www.linkedin.com/in/neema-totonchi/",
  },
  {
    name: "Olivia Fong",
    role: "Lead Product Designer",
    image: "/public/OIP.jpg",
    portfolioLink: "https://oliviask.com",
    linkedinLink: "https://www.linkedin.com/in/oliviaskfong/",
  },
  {
    name: "Patrick Hui",
    role: "Product Designer",
    image: "/public/OIP.jpg",
    portfolioLink: "https://patrickhui.design",
    linkedinLink: "https://www.linkedin.com/in/patrick-hui-design/",
  },
];

export default function About() {
  return (
    <main className={classes.main}>
      <Stack align="center" className={classes.stack}>
        <Text component="h2" className={`${classes.subtitle} subtitle`}>
          OUR TEAM
        </Text>
        <Title order={1} className={classes.title}>
          MoodBrew team
        </Title>
        <Text
          component="p"
          className={classes.description}
          style={{ marginBottom: "4rem" }}
        >
          We are a small team of tea enthusiasts who believe that tea is more
          than just a drink; it's a way of life. Our mission is to help people
          discover the healing properties of tea and provide them with the
          knowledge they need to brew the perfect cup.
        </Text>
        <div className={classes.profileGrid}>
          {teamMembers.map((member, index) => (
            <ProfileCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              portfolioLink={member.portfolioLink}
              linkedinLink={member.linkedinLink}
            />
          ))}
        </div>
        <FAQ />
      </Stack>
    </main>
  );
}
