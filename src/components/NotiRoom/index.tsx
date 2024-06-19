import classNames from 'classnames/bind';
import styles from './NotiRoom.module.scss';
import React from 'react';
import { AvatarIcon } from '../Icons';
import { formatMessageTime } from '../../utils/formatDate';

const cx = classNames.bind(styles);

interface Props {
    text: string;
    time: string;
    name?: string;
    avatar?: any;
}
const NotiRoom: React.FC<Props> = ({ text, time, name, avatar }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <AvatarIcon width={'14px'} height={'14px'} avatar={avatar && avatar.mediaUrl} />
                <span className={cx('text-msg')}>{text}</span>
                <div className={cx('timeStamp')}>{formatMessageTime(time)}</div>
            </div>
        </div>
    );
};

export default NotiRoom;
