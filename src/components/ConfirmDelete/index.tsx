import classNames from 'classnames/bind';
import styles from './ConfirmDelete.module.scss';
import React from 'react';

const cx = classNames.bind(styles);

interface Props {
    className?: string;
    text?: string;
    textBtnConfirm?: string;
    textBtnCancel?: string;
    onClick?: () => void;
    closeViewer?: () => void;
}

const ConfirmDelete: React.FC<Props> = ({ className, text, textBtnConfirm, textBtnCancel, onClick, closeViewer }) => {
    return (
        <div className={cx('wrapper', className)}>
            <div className={cx('box-confirmm')}>
                <span className={cx('text')}>{text}</span>
                <button type="button" className={cx('Delete')} onClick={onClick}>
                    {textBtnConfirm}
                </button>
                <button type="button" className={cx('Cancel')} onClick={closeViewer}>
                    {textBtnCancel}
                </button>
            </div>
        </div>
    );
};

export default ConfirmDelete;
