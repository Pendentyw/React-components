import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

function Link({ to, children, className }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    'text-blue-500',
    className,
    currentPath === to ? `font-semibold border-l-4 border-blue-500 pl-2` : ''
  );

  const handleClick = (e) => {
    if (e.metakey || e.ctrlKey) {
      return;
    }
    e.preventDefault();

    navigate(to);
  };

  return (
    <a
      className={classes}
      href={to}
      onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
