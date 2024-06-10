import classNames from 'classnames/bind';
import styles from './ItemUser.module.scss';
import { AvatarIcon, DeleteIcon } from '../../../../components/Icons';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import MoreMenu from '../../../../components/MoreMenu';
import ConfirmDelete from '../../../../components/ConfirmDelete';
import { useDispatch, useSelector } from 'react-redux';

const cx = classNames.bind(styles);

interface Props {
    to: string;
    onClick?: () => void;
    data: any;
    className?: string;
}

const ItemUser: React.FC<Props> = ({ to, onClick, className, data }) => {
    const { t } = useTranslation('post');
    const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
    const isOnline = useSelector((state: any) => state.userStatus);
    const dispatch = useDispatch();
    const onDelete = () => {
        setDeleteOpen(!deleteOpen);
    };

    const closeViewer = () => {
        setDeleteOpen(false);
    };

    const handleConfirmDelete = () => {};

    const moreMenu = [
        {
            icon: <DeleteIcon className={cx('icon-more')} />,
            title: t('comment.btn_delete'),
            action: onDelete,
            rule: true,
        },
    ];
    return (
        <NavLink className={(nav) => cx('wrapper', className, { active: nav.isActive })} to={to} onClick={onClick}>
            <div className={cx('body')}>
                <div className={cx('avatar')}>
                    <AvatarIcon width={'50px'} height={'50px'} avatar={data.imagAvatar} />
                    {isOnline[data.id] && <div className={cx('status')}></div>}
                </div>
                <div className={cx('content-right')}>
                    <div className={cx('info')}>
                        <div className={cx('text-name')}>
                            <span className={cx('name')}>{data.name}</span>
                        </div>
                        <div className={cx('text-msg')}>
                            <span className={cx('msg')}>you: aaa</span>
                            <span className={cx('break')}>
                                <span className={cx('icon-br')}>&nbsp;</span>
                                <span aria-hidden="true"> · </span>
                            </span>
                            <span className={cx('time-msg')}>3d</span>
                        </div>
                    </div>
                    <div className={cx('btn-control')}>
                        <MoreMenu className={cx('more-icon')} items={moreMenu} />
                    </div>
                </div>
            </div>
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
        </NavLink>
    );
};

export default ItemUser;
