import Link from './Link';

function Sidebar() {
  const links = [
    { label: 'Dropdown', path: '/dropdown' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Button', path: '/button' },
  ];

  const linksToDisplay = links.map((link) => {
    return (
      <Link
        className='mb-3'
        key={link.label}
        to={link.path}>
        {link.label}
      </Link>
    );
  });

  return <div className='sticky top-0 flex flex-col items-start'>{linksToDisplay}</div>;
}

export default Sidebar;