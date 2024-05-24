import classNames from 'classnames/bind';
import styles from './Profiles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../components/Loading';
import { Link, useNavigate } from 'react-router-dom';
import config from '../../../config';
import BoxInfo from './box-info';

const cx = classNames.bind(styles);

const Profiles = () => {
  const dispatch = useDispatch();
  const authSelector = useSelector(({ auth } : any) => auth);

  const navigate = useNavigate();
  const handleRedirectPage = (path: string) => {
    navigate(path);
  };

  
  

  return (
    <div className={cx('wrapper')}>
      <Loading isLoading={authSelector.loading}/>
      <BoxInfo/>
    </div>
  );
};

export default Profiles;
