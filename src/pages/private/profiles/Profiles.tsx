import classNames from 'classnames/bind';
import styles from './Profiles.module.scss';
import { useSelector } from 'react-redux';
import Loading from '../../../components/Loading';
import { useParams } from 'react-router-dom';
import BoxInfo from './box-info';
import Post from '../Post';

const cx = classNames.bind(styles);

const Profiles = () => {
  const postSelector = useSelector(({ posts }: any) => posts);
  const { id } = useParams<{ id: string }>();

  return (
    <div className={cx('wrapper')}>
      <Loading isLoading={postSelector.loading}/>
      <BoxInfo/>
      <div className={cx('inner')}>
        <Post id={id}/>
      </div>
    </div>
  );
};

export default Profiles;
