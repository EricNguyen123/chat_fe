import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useSelector } from 'react-redux';
import Loading from '../../../components/Loading';

import Post from '../Post';

const cx = classNames.bind(styles);

const Home = () => {
  const authSelector = useSelector(({ auth } : any) => auth);

  return (
    <div className={cx('wrapper')}>
      <Loading isLoading={authSelector.loading}/>
      <Post/>
    </div>
  );
};

export default Home;
