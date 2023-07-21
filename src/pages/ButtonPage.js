import { GoBell, GoDot, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  const clickHandler = () => {
    console.log('fatifati');
  };

  return (
    <div>
      <div>
        <Button
          success
          rounded
          onClick={clickHandler}>
          <GoBell />
          Fati
        </Button>
      </div>
      <div>
        <Button
          danger
          outline>
          <GoDot />
          fr
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          Srati
        </Button>
      </div>
      <div>
        <Button secondary>pierdziati</Button>
      </div>
      <div>
        <Button primary>fweew</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
