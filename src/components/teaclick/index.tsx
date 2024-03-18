

export const handleTeaClick = (router: any, tea: Tea) => {
  router.push({
    pathname: '/tea',
    query: { ...tea },
  });
};
