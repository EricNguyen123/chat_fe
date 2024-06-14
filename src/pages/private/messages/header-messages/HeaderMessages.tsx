import classNames from 'classnames/bind';
import styles from './HeaderMessages.module.scss';
import React from 'react';
import { AvatarIcon, CallIcon, InfoIcon, VideoCallIcon } from '../../../../components/Icons';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

interface Props {
    roomInfor: { id?: any; imagAvatar: string; name: string };
}

const HeaderMessages: React.FC<Props> = ({ roomInfor }) => {
    const isOnline = useSelector((state: any) => state.userStatus);
    const { t } = useTranslation('messages');

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content-left')}>
                <div className={cx('avatar')}>
                    <AvatarIcon width={'50px'} height={'50px'} avatar={roomInfor.imagAvatar} />
                </div>
                <div className={cx('left')}>
                    <div className={cx('text-name')}>
                        <span className={cx('name')}>{roomInfor.name}</span>
                    </div>
                    <div className={cx('text-msg')}>
                        <span className={cx('msg')}>{isOnline[roomInfor.id] && t('header.is_active')}</span>
                    </div>
                </div>
            </div>
            <div className={cx('content-right')}>
                <div className={cx('right')}>
                    <div className={cx('icon')}>
                        <CallIcon />
                    </div>
                    <div className={cx('icon')}>
                        <VideoCallIcon />
                    </div>
                    <div className={cx('icon')}>
                        <InfoIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMessages;
