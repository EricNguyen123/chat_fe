import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import React from 'react';
import Header from '../Header';
import NavBarLeft from '../NavBarLeft'
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const authSelector = useSelector(({ auth } : any) => auth);
  return (
    <div className={cx('wrapper')}>
      <Header/>
      <div className={cx('container')}>
        { authSelector.authenticated && (<NavBarLeft/>)}
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;