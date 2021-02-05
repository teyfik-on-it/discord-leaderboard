import { Link, useHistory } from 'react-router-dom';
import Alert from '../../Shared/Alert';

const NotFound = () => {
  const {pathname} = useHistory().location;

  return (
    <div>
      <Alert title={'Hata'} description={`${pathname} diye bir sayfa yok`}/>

      <h2>Faydalı linkler</h2>
      <ul>
        <li>
          <Link to={'/leaderboard'}>Lider Bordu</Link>
        </li>
      </ul>
    </div>
  );
};

export default NotFound;
