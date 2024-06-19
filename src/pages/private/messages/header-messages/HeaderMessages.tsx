import classNames from 'classnames/bind';
import styles from './HeaderMessages.module.scss';
import React, { useState } from 'react';
import { AvatarIcon, CallIcon, InfoIcon, VideoCallIcon } from '../../../../components/Icons';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import BoxDetail from '../box-detail';
import ClickOutside from '../../../../components/ClickOutside';

const cx = classNames.bind(styles);

interface Props {
    roomInfor: { id?: any; imagAvatar: string; name: string };
}

const HeaderMessages: React.FC<Props> = ({ roomInfor }) => {
    const isOnline = useSelector((state: any) => state.userStatus);
    const { t } = useTranslation('messages');
    const [onViewerDetail, setOnViewerDetail] = useState<boolean>(false);

    const closeViewer = () => {
        setOnViewerDetail(false);
    };

    const handleViewerDetail = () => {
        setOnViewerDetail(true);
    };

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
                    <div className={cx('icon')} onClick={handleViewerDetail}>
                        <InfoIcon />
                    </div>
                </div>
            </div>
            {onViewerDetail && (
                <div className={cx('add-viewer')}>
                    <ClickOutside
                        openView={onViewerDetail}
                        closeView={() => {
                            closeViewer();
                        }}
                        className={cx('box-detail')}
                    >
                        <BoxDetail handlerViewer={closeViewer} />
                    </ClickOutside>
                </div>
            )}
        </div>
    );
};

export default HeaderMessages;
