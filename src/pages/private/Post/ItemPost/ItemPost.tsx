import classNames from 'classnames/bind';
import styles from './ItemPost.module.scss';
import React, { useEffect, useState } from 'react';
import Image from '../../../../components/Image';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { CloseButton, 
          DeleteIcon, 
          EditIcon, 
          IconCmt, 
          IconHeart, 
          PlusFollow, 
          TickIcon } from '../../../../components/Icons';
import Comment from '../Comment';
import MoreMenu from '../../../../components/MoreMenu';
import FormPost from '../FormPost';
import CommentSection from '../Reply';
import ConfirmDelete from '../../../../components/ConfirmDelete';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../../../redux/posts/actions';
import { useTranslation } from 'react-i18next';
import Viewer from '../../../../components/Viewer';
import { following, unfollow } from '../../../../redux/users/actions';
import PostModal from '../../../../components/PostModal';
import Loading from '../../../../components/Loading';

const cx = classNames.bind(styles);

interface MediaItem {
  mediaUrl: string;
  mediaType?: string;
  id?: string;
}

interface User {
  name: string;
  id: number;
}

interface PostData {
  id: string;
  avatarMedia?: { mediaUrl: string };
  MediaItems: MediaItem[];
  User: User;
  body: string;
  updatedAt: string;
  children: PostData[];
  userId: number;
  isFollowing?: boolean;
}

interface Props {
  data: PostData;
  modal?: boolean;
}

const ItemPost: React.FC<Props> = ({ data, modal = false }) => {
  const dispatch = useDispatch();
  const postSelector = useSelector(({ posts }: any) => posts);
  const [image, setImage] = useState<string>("");
  const [views, setViews] = useState<string[]>([]);
  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0)
  const [isViewerComment, setIsViewerOpenComment] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [imgViewer, setImageViewer] = useState<{}[]>([]);
  const [checkUser, setCheckUser] = useState<boolean>(false);
  const [tick, setTick] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const url = process.env.REACT_APP_BASE_URL;
  const { t } = useTranslation("post");
  const dataUser = localStorage.data ? JSON.parse(localStorage.data) : undefined;
  const currentUserId = dataUser ? dataUser.id : undefined;
  const [newData, setNewData] = useState<PostData>(data);

  useEffect(() => {
    if (newData.avatarMedia) {
      setImage(url + newData.avatarMedia.mediaUrl);
    }
    
    if (newData.MediaItems.length > 0) {
      const items: string[] = newData.MediaItems.map(item => url + item.mediaUrl);
      const imgs: {}[] =  newData.MediaItems.map(item =>({id: item.id, mediaType: item.mediaType, mediaUrl: url + item.mediaUrl}));
      setViews(items);
      setImageViewer(imgs);
    }
  }, [newData, url]);
  
  useEffect(() => {
    if(postSelector && postSelector.post && postSelector.post.success) {
      closeViewer();
    }
  }, [postSelector, postSelector.post])
  
  useEffect(() => {
      setNewData(data);
  },[data])

  useEffect(() => {
    if(newData.isFollowing) {
      setTick(true)
    }
    else {
      setTick(false)
    }
  }, [newData])

  useEffect(() => {
    if (currentUserId === newData.userId) {
      setCheckUser(true);
    }
    else {
      setCheckUser(false);
    }
  }, [currentUserId, newData.userId]);

  const openViewer = (i : number) => {
    setIsViewerOpen(true);
    setIndex(i);
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
    setEditOpen(false);
    setDeleteOpen(false);
  };

  const handleFollow = (id: number) => {
    const callback = () => {
      setTick(true);
    };
    dispatch(following({ id: id, handleTick: callback }))
  }

  const handleUnFollow = (id: number) => {
    const callback = () => {
      setTick(false);
    };
    dispatch(unfollow({ id: id, handleTick: callback }))
  }

  const images = views.map(view => ({
    original: view,
    thumbnail: view,
  }));

  const onEdit = () => {
    setEditOpen(!editOpen);
  }

  const onDelete = () => {
    setDeleteOpen(!deleteOpen);
  }

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const handleViewerComment = () => {setIsViewerOpenComment(!isViewerComment)}

  const handleConfirmDelete = () => {dispatch(deletePost({ id: newData.id }))}

  const moreMenu = [
    { icon: <EditIcon className={cx('icon-more')}/>, title: t("comment.btn_edit"), action: onEdit, rule: checkUser },
    { icon: <DeleteIcon className={cx('icon-more')}/>, title: t("comment.btn_delete"), action: onDelete, rule: checkUser },
  ]

  return (
    <div className={cx('wrapper')}>
      <Loading isLoading={postSelector.loading}/>
      <div className={cx('title')}>
        <div className={cx('img-avatar')}>
          <Image className={cx('img-up')} src={image} alt=''/> 
        </div>
        <div className={cx('des')}>
          <span className={cx('name')}>{newData.User.name}</span>
          <span className={cx('time')}>{newData.updatedAt}</span>
        </div>
        <div className={cx('btn-control')}>
          <MoreMenu items={moreMenu}/>
        </div>
      </div>
      <div className={cx('body')}>
        <div className={cx('text')}>{newData.body}</div>
        <Viewer views={views} openViewer={openViewer} className={cx('post')}/>
      </div>
      <div className={cx('react')}>
        {!checkUser && (<div className={cx('btn-follow', 'btn-foot-post')}>
          { !tick ? 
          (<div className={cx('btn-handle-follow')} onClick={() => handleFollow(newData.User.id)}>
            <div className={cx('icon-plus-follow')}>
              <PlusFollow className={cx('svg')}/>
            </div>
          </div>) : 
          (<div className={cx('btn-handle-followed')} onClick={() => handleUnFollow(newData.User.id)}>
            <div className={cx('icon-plus-followed')}>
              <TickIcon className={cx('svg-tick')}/>
            </div>
          </div>)}
        </div>)}
        <div className={cx('btn-react', 'btn-foot-post')}>
          <div className={cx('btn-handle-react', 'btn-handle')}>
            <span className={cx('heart-icon', 'btn-icon')}>
              <IconHeart/>
            </span>
          </div>
        </div>
        <div className={cx('btn-comment', 'btn-foot-post')} onClick={handleViewerComment}>
          <div className={cx('btn-handle-cmt', 'btn-handle')}>
            <span className={cx('cmt-icon', 'btn-icon')}>
              <IconCmt/>
            </span>
          </div>
        </div>
      </div>
      <div className={cx('comment')}>
        <div className={cx('box-comment')}>
          {isViewerComment && (<Comment handleViewer={() => handleViewerComment()} postId={newData.id}/>)}
        </div>
        <div className={cx('list-comment')}>
          <CommentSection data={newData.children} modal={isModalOpen || modal} />
          {newData.children.length > 0 && !modal && !isModalOpen &&
            (<button onClick={openModal} className={cx('show-more')}>
              {t("comment.btn_more_comment")}
            </button>)}
        </div>
      </div>
      
      {isViewerOpen && (
        <div className={cx('gallery')}>
          <button onClick={closeViewer} className={cx('close-button')}>
            <CloseButton/>
          </button>
          <ImageGallery
            items={images}
            showThumbnails
            showFullscreenButton={false}
            showPlayButton={false}
            startIndex={index}
            additionalClass={cx('centered')}
          />
        </div>
      )}
      {editOpen && (
        <div className={cx('edit-viewer')}>
          <div className={cx('box-edit')}>
            <button onClick={closeViewer} className={cx('close-button')}>
              <CloseButton/>
            </button>
            <FormPost className={cx('custom-form-edit')} initialize={ {body: newData.body, mediaItems: imgViewer, id: newData.id } }/>
          </div>
        </div>
      )}
      {deleteOpen && (<ConfirmDelete closeViewer={() => {closeViewer()}} onClick={() => {handleConfirmDelete()}}/>)}
      {isModalOpen && <PostModal data={newData} onClose={closeModal}/>}
    </div>
  );
};

export default ItemPost;
