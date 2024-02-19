type Tea = {
    teaName: string;
    type: string;
    steepTime: string;
    origin: string;
    benefit: string;
    flavor: string;
    caffeineLevel: string;
  };
  
  interface TeaCardProps {
    searchTerm: string;
  }