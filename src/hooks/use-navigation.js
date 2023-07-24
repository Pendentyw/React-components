import { useContext } from 'react';
import NavigationContext from '../contex/navigation';

function useNavigation() {
  return useContext(NavigationContext);
}

export default useNavigation;
