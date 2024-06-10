// File: /path/to/ItemMessages.tsx

import classNames from 'classnames/bind';
import styles from './ItemMessages.module.scss';
import React, { useState } from 'react';
import { AvatarIcon } from '../../../../../components/Icons';

const cx = classNames.bind(styles);

const messages = [
    { id: 1, text: 'Hello!', sender: 'user', time: '10:00 AM' },
    { id: 2, text: 'Hi, how are you?', sender: 'friend', time: '10:01 AM' },
    { id: 3, text: 'I am good, thanks!', sender: 'user', time: '10:02 AM' },
    { id: 4, text: 'I am good, thanks!', sender: 'friend', time: '10:02 AM' },
    { id: 5, text: 'I am good, thanks!', sender: 'user', time: '10:02 AM' },
    { id: 6, text: 'I am good, thanks!', sender: 'friend', time: '10:02 AM' },
    { id: 7, text: 'I am good, thanks!', sender: 'user', time: '10:02 AM' },
    { id: 8, text: 'I am good, thanks!', sender: 'user', time: '10:02 AM' },
    { id: 9, text: 'I am good, thanks!', sender: 'friend', time: '10:02 AM' },
];

interface MessageItemProps {
    text: string;
    sender: string;
    time: string;
}

const MessageItem: React.FC<MessageItemProps> = ({ text, sender, time }) => {
    return (
        <div className={cx('messageItem', sender)}>
            <AvatarIcon width={'20px'} height={'20px'} avatar={'#'} />
            <div className={cx('messageContent')}>
                {text}
                <div className={cx('timeStamp')}>{time}</div>
            </div>
        </div>
    );
};

const ItemMessages: React.FC = () => {
    const [messageList, setMessageList] = useState(messages);

    return (
        <div className={cx('wrapper')}>
            {messageList.map((message) => (
                <MessageItem key={message.id} text={message.text} sender={message.sender} time={message.time} />
            ))}
        </div>
    );
};

export default ItemMessages;
