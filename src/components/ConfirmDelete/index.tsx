import classNames from 'classnames/bind';
import styles from './ConfirmDelete.module.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

interface Props {
  className?: string;
  text?: string;
  onClick?: () => void;
  closeViewer?: () => void;
}

const ConfirmDelete: React.FC<Props> = (({ className, text, onClick, closeViewer }) => {
  const { t } = useTranslation("post");
  return (
    <div className={cx('wrapper', className)}>
      <div className={cx('box-confirmm')}>
        <span className={cx('text')}>{t("noti.noti_delete")}</span>
        <button type="button" className={cx('Delete')} onClick={onClick}>{t("noti.delete")}</button>
        <button type="button" className={cx('Cancel')} onClick={closeViewer}>{t("noti.cancel")}</button>
      </div>
    </div>
  );
});

export default ConfirmDelete;
