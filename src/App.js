import Link from './components/Link';
import Route from './components/Route';
import AccordianPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage';

function App() {
  return (
    <div>
      <Link to='/accordion'>Go to Accordion</Link>
      <Link to='/dropdown'>Go to Dropdown</Link>
      <Link to='/button'>Go to Button</Link>
      <div>
        <Route path='/accordion'>
          <AccordianPage />
        </Route>
        <Route path='/dropdown'>
          <DropdownPage />
        </Route>
        <Route path='/button'>
          <ButtonPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
