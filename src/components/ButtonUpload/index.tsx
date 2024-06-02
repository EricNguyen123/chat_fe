import classNames from 'classnames/bind';
import styles from './ButtonUpload.module.scss';
import { forwardRef } from 'react';
import { PlusImport } from '../Icons';

const cx = classNames.bind(styles);

interface Props {
  className?: string;
  text?: string;
  onClick?: () => void;
}

const ButtonUpload = forwardRef<HTMLDivElement, Props>(({ className, text, onClick }, ref) => {

  return (
    <div ref={ref} className={cx('wrapper', className)} onClick={onClick}>
      <PlusImport className={cx('plus')}/>
      <span className={cx('text')}>{text}</span>
    </div>
  );
});

export default ButtonUpload;
