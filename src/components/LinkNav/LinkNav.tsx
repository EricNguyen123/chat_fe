import classNames from 'classnames/bind';
import styles from './LinkNav.module.scss';
import { Link } from 'react-router-dom';
import React from 'react';

const cx = classNames.bind(styles);

interface Props {
  children: React.ReactNode,
  path: any,
}

const LinkNav: React.FC<Props> = ({ children, path }) => {
  return (
    <div className={cx('wrapper')}>
      <Link to={path}>{children}</Link>
    </div>
  );
};

export default LinkNav;
