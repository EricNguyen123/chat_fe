import classNames from 'classnames/bind';
import styles from './Reply.module.scss';
import Image from '../../../../components/Image';
import { useEffect, useState } from 'react';
import { CloseButton, DeleteIcon, LikeCommentIcon } from '../../../../components/Icons';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Comment from '../Comment';
import { useTranslation } from 'react-i18next';
import MoreMenu from '../../../../components/MoreMenu';
import ConfirmDelete from '../../../../components/ConfirmDelete';
import { deletePost } from '../../../../redux/posts/actions';
import { useDispatch, useSelector } from 'react-redux';
import Viewer from '../../../../components/Viewer';
import { formatDate } from '../../../../utils/formatDate';
import Reacts from '../../../../components/Reacts';
import { createReact, deleteReact } from '../../../../redux/reactIcon/actions';

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

interface React {
    action: number;
    id?: number;
    userId: number;
}

interface PostData {
    id: string;
    avatarMedia?: { mediaUrl: string };
    MediaItems: MediaItem[];
    Reacts: React[];
    User: User;
    body: string;
    updatedAt: string;
    children: PostData[];
    userId: number;
    isFollowing?: boolean;
}

interface Props {
    data: PostData[];
    checkUser?: boolean;
    modal?: boolean;
}

interface PropsData {
    data: PostData;
    checkUser?: boolean;
}

const MAX_INITIAL_COMMENTS = parseInt(process.env.REACT_APP_MAX_INITIAL_COMMENTS ?? '0', 10);

const Reply: React.FC<PropsData> = ({ data }) => {
    const postSelector = useSelector(({ posts }: any) => posts);
    const [image, setImage] = useState<string>('');
    const [views, setViews] = useState<string[]>([]);
    const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(0);
    const [isViewerComment, setIsViewerOpenComment] = useState<boolean>(false);
    const [showReplies, setShowReplies] = useState(false);
    const url = process.env.REACT_APP_BASE_URL;
    const { t } = useTranslation('post');
    const dispatch = useDispatch();
    const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
    const dataUser = localStorage.data ? JSON.parse(localStorage.data) : undefined;
    const currentUserId = dataUser ? dataUser.id : undefined;
    const [checkUser, setCheckUser] = useState<boolean>(false);

    useEffect(() => {
        if (postSelector && postSelector.post && postSelector.post.success) {
            closeViewer();
        }
    }, [postSelector.post]);

    useEffect(() => {
        if (currentUserId === data.userId) {
            setCheckUser(true);
        } else {
            setCheckUser(false);
        }
    }, [currentUserId, data.userId]);

    const onDelete = () => {
        setDeleteOpen(!deleteOpen);
    };

    const moreMenu = [
        {
            icon: <DeleteIcon className={cx('icon-more')} />,
            title: t('comment.btn_delete'),
            action: onDelete,
            rule: checkUser,
        },
    ];

    useEffect(() => {
        if (data.avatarMedia) {
            setImage(url + data.avatarMedia.mediaUrl);
        }
        if (data.MediaItems.length > 0) {
            const items: string[] = data.MediaItems.map((item) => url + item.mediaUrl);
            setViews(items);
        }
    }, [data, url]);

    const openViewer = (i: number) => {
        setIndex(i);
        setIsViewerOpen(true);
    };

    const closeViewer = () => {
        setIsViewerOpen(false);
        setDeleteOpen(false);
    };

    const handleViewerComment = () => {
        setIsViewerOpenComment(!isViewerComment);
    };
    const handleConfirmDelete = () => {
        dispatch(deletePost({ id: data.id }));
    };

    const handlePostReactions = (action: number, postId: number, userId: number) => {
        dispatch(createReact({ action, postId, userId, messageId: null }));
    };

    const handleDeleteReactions = (postId: number, userId: number) => {
        dispatch(deleteReact({ postId, userId, messageId: null }));
    };

    const hasUserReacted = (userId: number) => {
        return data.Reacts.some((react: any) => parseInt(react.userId, 10) === userId);
    };

    const handleOnReactions = () => {
        if (hasUserReacted(currentUserId)) {
            handleDeleteReactions(parseInt(data.id, 10), currentUserId);
        } else {
            handlePostReactions(0, parseInt(data.id, 10), currentUserId);
        }
    };

    const handleClickIcon = (i: number) => {
        handlePostReactions(i, parseInt(data.id, 10), currentUserId);
    };

    const images = views.map((view) => ({
        original: view,
        thumbnail: view,
    }));

    return (
        <div className={cx('wrapper', 'comment')}>
            <div className={cx('inner-cmt')}>
                <div className={cx('header-reply')}>
                    <div className={cx('header-left')}>
                        <div className={cx('img-avatar')}>
                            <Image className={cx('img-up')} src={image} alt="" />
                        </div>
                        <div className={cx('des')}>
                            <span className={cx('name')}>{data.User.name}</span>
                            <span className={cx('time')}>{formatDate(data.updatedAt)}</span>
                        </div>
                    </div>
                    <div className={cx('icon-cmt')}>
                        <div className={cx('btn-control')}>
                            <MoreMenu items={moreMenu} />
                        </div>
                    </div>
                </div>
                <div className={cx('body-reply')}>
                    <div className={cx('content-left')}>
                        <span className={cx('content')}>{data.body}</span>
                        <Viewer views={views} openViewer={openViewer} className={cx('viewer-small')} />
                        <span
                            className={cx('btn-reply')}
                            onClick={() => {
                                setIsViewerOpenComment(!isViewerComment);
                            }}
                        >
                            {isViewerComment ? t('comment.btn_cancel') : t('comment.btn_reply')}
                        </span>
                    </div>
                    <div className={cx('icon-cmt')}>
                        <Reacts
                            type={'none'}
                            rootIcon={<LikeCommentIcon className={cx('icon')} />}
                            postId={parseInt(data.id, 10)}
                            reacts={data.Reacts}
                            userId={currentUserId}
                            onClick={() => {
                                handleOnReactions();
                            }}
                            handleClickIcon={handleClickIcon}
                        />
                    </div>
                </div>
                <div className={cx('footer-reply')}>
                    {isViewerComment && <Comment handleViewer={() => handleViewerComment()} postId={data.id} />}
                </div>
            </div>
            {data.children && data.children.length > 0 && (
                <div className={cx('replies')}>
                    {showReplies ? (
                        <>
                            {data.children.map((child, index) => (
                                <Reply key={index} data={child} />
                            ))}
                            <button onClick={() => setShowReplies(false)} className={cx('show-more')}>
                                {t('comment.btn_hidden')}
                            </button>
                        </>
                    ) : (
                        <button onClick={() => setShowReplies(true)} className={cx('show-more')}>
                            {t('comment.btn_more_comment')} {data.children.length}
                        </button>
                    )}
                </div>
            )}
            {isViewerOpen && (
                <div className={cx('gallery')}>
                    <button onClick={closeViewer} className={cx('close-button')}>
                        <CloseButton />
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
            {deleteOpen && (
                <ConfirmDelete
                    text={t('noti.noti_delete')}
                    textBtnConfirm={t('noti.delete')}
                    textBtnCancel={t('noti.cancel')}
                    closeViewer={() => {
                        closeViewer();
                    }}
                    onClick={() => {
                        handleConfirmDelete();
                    }}
                />
            )}
        </div>
    );
};

const CommentSection: React.FC<Props> = ({ data, modal }) => {
    const [showAllComments, setShowAllComments] = useState(false);
    const { t } = useTranslation('post');

    const commentsToShow = showAllComments ? data : data.slice(0, MAX_INITIAL_COMMENTS);

    return (
        <div className={cx('comment-section', 'box-reply')}>
            {commentsToShow.map((item, index) => (
                <Reply key={index} data={item} />
            ))}
            {modal && !showAllComments && data.length > MAX_INITIAL_COMMENTS && (
                <button onClick={() => setShowAllComments(true)} className={cx('show-more')}>
                    {t('comment.btn_more_comment')}{' '}
                    {data.length > MAX_INITIAL_COMMENTS && data.length - MAX_INITIAL_COMMENTS}
                </button>
            )}
            {showAllComments && data.length > MAX_INITIAL_COMMENTS && (
                <button onClick={() => setShowAllComments(false)} className={cx('show-more')}>
                    {t('comment.btn_hidden')}
                </button>
            )}
        </div>
    );
};

export default CommentSection;
