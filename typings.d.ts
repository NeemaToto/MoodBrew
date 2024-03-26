type Tea = {
  teaName: string;
  type: string;
  steepTime: string;
  origin: string;
  benefit: string;
  flavor: string;
  caffeineLevel: string;
  imageLink?: string;
};

interface TeaCardProps {
  searchTerm: string;
}

interface IconWrapperProps {
  children: React.ReactNode;
  href: string;
}

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  portfolioLink: string;
  linkedinLink: string;
}

interface ChartData {
  labels: string[];
  datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
  }[];
}