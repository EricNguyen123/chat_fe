import classNames from 'classnames/bind';
import styles from './Loading.module.scss';
import React from 'react';

const cx = classNames.bind(styles);

interface Props {
  isLoading: boolean;
}

const Loading: React.FC<Props> = ({ isLoading }) => {
  return (
    <>
      { isLoading && 
      (<div className={cx('bg-grey1', 'loading-wrapper')}>
        <div className={cx('circle-loading')}></div>
      </div>)}
    </>
   
  )
};

export default Loading;
