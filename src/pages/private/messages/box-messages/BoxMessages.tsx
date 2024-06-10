import classNames from 'classnames/bind';
import styles from './BoxMessages.module.scss';
import React from 'react';
import { NotMessagesIcon } from '../../../../components/Icons';
import HeaderMessages from '../header-messages';
import MessageForm from '../message-form';
import ContentMesages from '../content-mesages';

const cx = classNames.bind(styles);

interface Props {
    checkMessage: boolean;
}

const BoxMessages: React.FC<Props> = ({ checkMessage }) => {
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
                        <HeaderMessages />
                    </div>
                    <div className={cx('content-msg')}>
                        <ContentMesages data={{}} />
                    </div>
                    <div className={cx('footer-msg')}>
                        <MessageForm />
                    </div>
                </div>
            )}
        </div>
    );
};

export default BoxMessages;
