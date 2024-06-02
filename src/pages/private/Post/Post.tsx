import classNames from 'classnames/bind';
import styles from './Post.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPosts, getUserPosts } from '../../../redux/posts/actions';
import Loading from '../../../components/Loading';
import ItemPost from './ItemPost';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

interface Props {
  id?: string;
}
const Post: React.FC<Props> = ({ id = null}) => {
  const { t } = useTranslation("post");
  const dispatch = useDispatch();
  const postSelector = useSelector(({ posts }: any) => posts);

  useEffect(() => { 
    id === null ? dispatch(getPosts()) : dispatch(getUserPosts({ id: id }))
  }, [id])

  return (
    <div className={cx('wrapper')}>
      <Loading isLoading={postSelector.loading}/>
      <div className={cx('posts')}>
        { postSelector && postSelector.posts && 
          postSelector.posts.length === 0 && 
          (<span className="noti-empty">{t("noti.no_post")}</span>)} 
        { postSelector && postSelector.posts &&
            (postSelector.posts.map((post:any, key: number) => 
                          (<ItemPost data={post} key={key}/>)))}
      </div>
    </div>
  );
};

export default Post;
