// File: /path/to/ItemMessages.tsx

import classNames from 'classnames/bind';
import styles from './ItemMessages.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import { AvatarIcon } from '../../../../../components/Icons';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

interface MessageItemProps {
    text: string;
    sender: string;
    time: string;
    name?: string;
    avatar?: any;
}

interface Props {
    data: any[];
}

const MessageItem: React.FC<MessageItemProps> = ({ text, sender, time, avatar, name }) => {
    return (
        <div className={cx('messageItem', sender)}>
            {sender !== 'user' && <AvatarIcon width={'20px'} height={'20px'} avatar={avatar && avatar.mediaUrl} />}
            <div className={cx('messageContent')}>
                {text}
                <div className={cx('timeStamp')}>{time}</div>
            </div>
        </div>
    );
};

const ItemMessages: React.FC<Props> = ({ data }) => {
    const userSelector = useSelector(({ users }: any) => users);
    const [messageList, setMessageList] = useState<any[]>([]);
    const addMessageSelector = useSelector(({ addMessage }: any) => addMessage);
    const messageEndRef = useRef<HTMLDivElement>(null);
    console.log('data', messageList);
    useEffect(() => {
        if (data.length >= 0) {
            const messages = data.map((e: any) => ({
                name: e.User.name,
                avatar: e.avatarMedia,
                text: e.messages,
                time: e.createdAt,
                sender: e.userId === userSelector.currentUser.id ? 'user' : 'friend',
            }));

            setMessageList(messages);
        }
    }, [data]);

    useEffect(() => {
        if (addMessageSelector && addMessageSelector.message) {
            const newMsg = addMessageSelector.message.message && JSON.parse(addMessageSelector.message.message);
            const msg = newMsg && {
                name: newMsg.User.name,
                avatar: newMsg.avatarMedia,
                text: newMsg.messages,
                time: newMsg.createdAt,
                sender: parseInt(newMsg.userId, 10) === parseInt(userSelector.currentUser.id, 10) ? 'user' : 'friend',
            };
            if (msg) {
                setMessageList([...messageList, msg]);
            }
        }
    }, [addMessageSelector]);

    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messageList]);

    return (
        <div className={cx('wrapper')}>
            {messageList.map((message, index) => (
                <MessageItem
                    key={index}
                    text={message && message.text}
                    sender={message && message.sender}
                    avatar={message && message.avatar}
                    time={message && message.time}
                />
            ))}
            <div ref={messageEndRef} />
        </div>
    );
};

export default ItemMessages;
