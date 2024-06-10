import classNames from 'classnames/bind';
import styles from './BoxMessages.module.scss';
import React, { useEffect, useState } from 'react';
import { NotMessagesIcon } from '../../../../components/Icons';
import HeaderMessages from '../header-messages';
import MessageForm from '../message-form';
import ContentMesages from '../content-mesages';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../../../../redux/message/actions';

const cx = classNames.bind(styles);

interface Props {
    checkMessage: boolean;
    id?: string;
    roomInfor: { imagAvatar: string; name: string };
}

const BoxMessages: React.FC<Props> = ({ checkMessage, id, roomInfor }) => {
    const dispatch = useDispatch();
    const messagesSelector = useSelector(({ messages }: any) => messages);
    const [messages, setMessages] = useState<any[]>([]);
    useEffect(() => {
        if (id) {
            dispatch(getMessages({ roomId: id }));
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (messagesSelector && messagesSelector.messages) {
            setMessages(messagesSelector.messages);
        }
    }, [messagesSelector]);

    return (
        <div className={cx('wrapper')}>
            {!checkMessage && (
                <div className={cx('not-msg')}>
                    <NotMessagesIcon />
                    <span className={cx('title-msg')}>Your messages</span>
                    <span className={cx('tiny-title')}>Send a message to start a chat.</span>
                </div>
            )}
            {checkMessage && (
                <div className={cx('body')}>
                    <div className={cx('header-msg')}>
                        <HeaderMessages roomInfor={roomInfor} />
                    </div>
                    <div className={cx('content-msg')}>
                        <ContentMesages data={{ messages }} />
                    </div>
                    <div className={cx('footer-msg')}>
                        <MessageForm id={id} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default BoxMessages;
