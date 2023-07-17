import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: '32fsdww',
      label: 'Is Fati Fat?',
      content:
        'Indeed, Fati is very fat! There is no being with more fat than Fati. Her farts are made of fat too',
    },
    {
      id: '32fsdw2w',
      label: 'Is Hipć moody?',
      content:
        'Yep, he complains about everything. He is especially mad if you dont hug him too often. Hipć needs a lot of your attention',
    },
    {
      id: '32fsd3ww',
      label: 'What is inside BORBO BORBO?',
      content:
        'Two small Borbo Borbos. One is an owl and sencond one is a woodpecker, which is very unstable btw',
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
