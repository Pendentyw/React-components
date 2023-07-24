import { GoBell, GoDot, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  const clickHandler = () => {};

  return (
    <div className='flex flex-col'>
      <div>
        <Button
          success
          rounded
          onClick={clickHandler}>
          Pat Fati
        </Button>
      </div>
      <div>
        <Button
          danger
          outline>
          Click Lyyyś
        </Button>
      </div>
      <div>
        <Button warning>Srati</Button>
      </div>
      <div>
        <Button secondary>Pierdziati</Button>
      </div>
      <div>
        <Button primary>Hiiiipć</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
