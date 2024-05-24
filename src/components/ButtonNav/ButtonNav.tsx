import classNames from 'classnames/bind';
import styles from './ButtonNav.module.scss';
import { useNavigate } from 'react-router-dom';
import React, { forwardRef } from 'react';
import Image from '../Image';

const cx = classNames.bind(styles);

interface Props {
  image?: string;
  title?: string;
  path?: string;
  children?: React.ReactNode;
}

const ButtonNav = forwardRef<HTMLDivElement, Props>(({ children, image, title, path }, ref) => {
  const navigate = useNavigate();
  
  const handle = () => {
    if (path) navigate(path);
  }

  return (
    <div ref={ref} className={cx('wrapper')}>
      <div className={cx('container')} onClick={handle}>
        {image && title && path && (
          <div className={cx('box')}>
            <div className={cx('icon')}>
              <Image className={cx('img-icon')} src={image} alt='icon'/>
            </div>
            <div className={cx('title')}>
              <span className={cx('title-name')}>{title}</span>
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
});

export default ButtonNav;
