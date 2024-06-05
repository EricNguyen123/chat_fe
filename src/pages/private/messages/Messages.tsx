import classNames from 'classnames/bind';
import styles from './Messages.module.scss';
import { useSelector } from 'react-redux';
import Loading from '../../../components/Loading';

const cx = classNames.bind(styles);

const Messages = () => {
  const authSelector = useSelector(({ auth } : any) => auth);

  return (
    <div className={cx('wrapper')}>
      <Loading isLoading={authSelector.loading}/>
    </div>
  );
};

export default Messages;
