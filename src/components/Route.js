import { useContext } from 'react';
import NavigationContext from '../contex/navigation';

function Route({ path, children }) {
  const { currentPath } = useContext(NavigationContext);
  console.log(currentPath);

  if (path === currentPath) {
    return children;
  }
  return null;
}

export default Route;
