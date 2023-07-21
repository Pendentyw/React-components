import { useContext } from 'react';
import NavigationContext from '../contex/navigation';

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);
  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return <a onClick={handleClick}>{children}</a>;
}

export default Link;
