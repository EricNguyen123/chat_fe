// File: /path/to/ItemMessages.tsx

import classNames from 'classnames/bind';
import styles from './ItemMessages.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import { AvatarIcon, CloseButton, DeleteIcon, LikeCommentIcon } from '../../../../../components/Icons';
import { useDispatch, useSelector } from 'react-redux';
import Viewer from '../../../../../components/Viewer';
import ImageGallery from 'react-image-gallery';
import { formatDateTime, formatMessageTime, hasDateChanged } from '../../../../../utils/formatDate';
import MoreMenu from '../../../../../components/MoreMenu';
import ConfirmDelete from '../../../../../components/ConfirmDelete';
import { useTranslation } from 'react-i18next';
import { deleteMessages } from '../../../../../redux/message/actions';
import Loading from '../../../../../components/Loading';
import { setupSocketEvents } from '../../../../../services/socketEvents';
import { useParams } from 'react-router-dom';
import ReactsMessages from '../../reacts-messages';
import { createReact, deleteReact } from '../../../../../redux/reactIcon/actions';

const cx = classNames.bind(styles);

interface MessageItemProps {
    id: any;
    text: string;
    sender: string;
    time: string;
    name?: string;
    avatar?: any;
    MediaItems?: any;
    Reacts?: any;
    showDateLine: boolean;
    showAvataChanged: boolean;
}

interface Props {
    data: any[];
}

const MessageItem: React.FC<MessageItemProps> = ({
    id,
    text,
    sender,
    time,
    avatar,
    name,
    MediaItems,
    Reacts,
    showDateLine,
    showAvataChanged,
}) => {
    const messagesSelector = useSelector(({ messages }: any) => messages);
    const url = process.env.REACT_APP_BASE_URL;
    const [views, setViews] = useState<string[]>([]);
    const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);
    const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(0);
    const { t } = useTranslation('post');
    const dispatch = useDispatch();
    const [mediaTypes, setMediaTypes] = useState<number>(0);
    const dataUser = localStorage.data ? JSON.parse(localStorage.data) : undefined;
    const currentUserId = dataUser ? dataUser.id : undefined;

    const closeViewer = () => {
        setIsViewerOpen(false);
        setDeleteOpen(false);
    };
    const openViewer = (i: number) => {
        setIndex(i);
        setIsViewerOpen(true);
    };

    useEffect(() => {
        if (MediaItems && MediaItems.length > 0) {
            setMediaTypes(MediaItems[0].mediaType);
            const items: string[] = MediaItems.map((item: any) => url + item.mediaUrl);
            setViews(items);
        } else {
            setViews([]);
        }
    }, [MediaItems]);

    const images = views.map((view) => ({
        original: view,
        thumbnail: view,
    }));

    const onDelete = () => {
        setDeleteOpen(!deleteOpen);
    };

    const handleConfirmDelete = () => {
        dispatch(deleteMessages({ id: id }));
    };

    useEffect(() => {
        if (messagesSelector.loading) {
            closeViewer();
        }
    }, [messagesSelector]);

    const moreMenu = [
        {
            icon: <DeleteIcon className={cx('icon-more')} />,
            title: t('comment.btn_delete'),
            action: onDelete,
            rule: sender === 'user',
        },
    ];

    const hasUserReacted = (messageId: number, userId: number) => {
        return messagesSelector.messages.some(
            (message: any) =>
                parseInt(message.id, 10) === messageId &&
                message.Reacts.some((react: any) => parseInt(react.userId, 10) === userId),
        );
    };

    const handlePostReactions = (action: number, messageId: number, userId: number) => {
        dispatch(createReact({ action, postId: null, userId, messageId }));
    };

    const handleDeleteReactions = (messageId: number, userId: number) => {
        dispatch(deleteReact({ postId: null, userId, messageId }));
    };

    const handleOnReactions = () => {
        if (hasUserReacted(parseInt(id, 10), currentUserId)) {
            handleDeleteReactions(parseInt(id, 10), currentUserId);
        } else {
            handlePostReactions(0, parseInt(id, 10), currentUserId);
        }
    };

    const handleClickIcon = (i: number) => {
        handlePostReactions(i, parseInt(id, 10), currentUserId);
    };

    return (
        <>
            <Loading isLoading={messagesSelector.loading} />
            {showDateLine && <div className={cx('date-line')}>{formatDateTime(time)}</div>}
            <div className={cx('messageItem', sender)}>
                {showAvataChanged && sender !== 'user' && (
                    <AvatarIcon width={'20px'} height={'20px'} avatar={avatar && avatar.mediaUrl} />
                )}
                {!showAvataChanged && sender !== 'user' && <div className={cx('line-avatar')}></div>}
                <div className={cx('messageContent')}>
                    <span className={cx('text-msg')}>{text}</span>
                    {mediaTypes === 1 && (
                        <Viewer views={views} openViewer={openViewer} className={cx('viewer-small')} />
                    )}
                    {mediaTypes === 2 &&
                        views.map((media, mediaIndex) => (
                            <audio key={mediaIndex} controls>
                                <source src={media} type="audio/wav" />
                                {t('noti.not_support_audio')}
                            </audio>
                        ))}
                    <div className={cx('timeStamp')}>{formatMessageTime(time)}</div>
                </div>

                <div className={cx('icon-cmt')}>
                    <ReactsMessages
                        type={'none'}
                        rootIcon={<LikeCommentIcon className={cx('icon')} />}
                        messageId={parseInt(id, 10)}
                        reacts={Reacts}
                        userId={currentUserId}
                        onClick={() => {
                            handleOnReactions();
                        }}
                        handleClickIcon={handleClickIcon}
                    />
                </div>

                <div className={cx('btn-control')}>
                    <MoreMenu className={cx('more-icon')} items={moreMenu} />
                </div>
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
                        closeViewer={() => {
                            closeViewer();
                        }}
                        onClick={() => {
                            handleConfirmDelete();
                        }}
                    />
                )}
            </div>
        </>
    );
};

const ItemMessages: React.FC<Props> = ({ data }) => {
    const userSelector = useSelector(({ users }: any) => users);
    const [messageList, setMessageList] = useState<any[]>([]);
    const addMessageSelector = useSelector(({ addMessage }: any) => addMessage);
    const messageEndRef = useRef<HTMLDivElement>(null);
    const deleteMessageSelector = useSelector(({ deleteMessage }: any) => deleteMessage);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (data.length >= 0) {
            const messages = data.map((e: any) => ({
                id: e.id,
                name: e.User.name,
                avatar: e.avatarMedia,
                text: e.messages,
                time: e.createdAt,
                sender: e.userId === userSelector.currentUser.id ? 'user' : 'friend',
                MediaItems: e.MediaItems,
                Reacts: e.Reacts,
            }));

            setMessageList(messages);
        }
    }, [data]);

    useEffect(() => {
        if (addMessageSelector && addMessageSelector.message) {
            const newMsg = addMessageSelector.message.message && JSON.parse(addMessageSelector.message.message);

            const msg = newMsg && {
                id: newMsg.id,
                name: newMsg.User.name,
                avatar: newMsg.avatarMedia,
                text: newMsg.messages,
                time: newMsg.createdAt,
                sender: parseInt(newMsg.userId, 10) === parseInt(userSelector.currentUser.id, 10) ? 'user' : 'friend',
                MediaItems: newMsg.MediaItems,
                Reacts: newMsg.Reacts,
            };
            if (msg && newMsg.roomId === id) {
                setMessageList([...messageList, msg]);
            }
        }
        if (userSelector && userSelector.currentUser) {
            const socketEvents = setupSocketEvents && setupSocketEvents(userSelector.currentUser.id);
            socketEvents && socketEvents.sendAllLastMessages(userSelector.currentUser.id);
        }
    }, [addMessageSelector]);

    useEffect(() => {
        if (deleteMessageSelector && deleteMessageSelector.message) {
            setMessageList((prevList) => prevList.filter((message) => message.id !== deleteMessageSelector.message.id));
        }
    }, [deleteMessageSelector]);

    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messageList]);

    const handleTimeLine = (index: any, message: any) => {
        return index === 0 || hasDateChanged(messageList[index - 1].time, message.time);
    };

    const handleAvatarChanged = (index: any, message: any) => {
        if (index === 0) {
            return true;
        }

        if (messageList[index - 1].avatar.id !== message.avatar.id) {
            return true;
        } else {
            return false;
        }
    };
    return (
        <div className={cx('wrapper')}>
            {messageList.map((message, index) => {
                const showDateLine = handleTimeLine(index, message);
                const showAvataChanged = handleAvatarChanged(index, message);
                return (
                    <MessageItem
                        key={index}
                        id={message && message.id}
                        text={message && message.text}
                        sender={message && message.sender}
                        avatar={message && message.avatar}
                        time={message && message.time}
                        MediaItems={message && message.MediaItems}
                        Reacts={message && message.Reacts}
                        showDateLine={showDateLine}
                        showAvataChanged={showAvataChanged}
                    />
                );
            })}
            <div ref={messageEndRef} />
        </div>
    );
};

export default ItemMessages;
