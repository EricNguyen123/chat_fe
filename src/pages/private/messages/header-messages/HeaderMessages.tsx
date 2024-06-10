import classNames from 'classnames/bind';
import styles from './HeaderMessages.module.scss';
import React from 'react';
import { AvatarIcon, CallIcon, InfoIcon, VideoCallIcon } from '../../../../components/Icons';

const cx = classNames.bind(styles);

interface Props {}

const HeaderMessages: React.FC<Props> = ({}) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content-left')}>
                <div className={cx('avatar')}>
                    <AvatarIcon width={'50px'} height={'50px'} avatar={'#'} />
                </div>
                <div className={cx('left')}>
                    <div className={cx('text-name')}>
                        <span className={cx('name')}>"aa"</span>
                    </div>
                    <div className={cx('text-msg')}>
                        <span className={cx('msg')}>dang hoat dong</span>
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
