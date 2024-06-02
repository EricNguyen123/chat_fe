// components/PostModal.tsx

import React from 'react';
import classNames from 'classnames/bind';
import styles from './PostModal.module.scss';
import { CloseButton } from '../Icons';
import ItemPost from '../../pages/private/Post/ItemPost';

const cx = classNames.bind(styles);

interface PostModalProps {
  data: any;
  onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ data, onClose }) => {
  return (
    <div className={cx('modal-overlay')} onClick={onClose}>
      <div className={cx('modal-content')} onClick={(e) => e.stopPropagation()}>
        <button className={cx('close-button')} onClick={onClose}>
          <CloseButton />
        </button>
        <ItemPost data={data} modal={true} />
      </div>
    </div>
  );
};

export default PostModal;
