import classNames from "classnames/bind";
import styles from "./Viewer.module.scss";
import Image from '../../components/Image';
import React from 'react';

const cx = classNames.bind(styles);

interface Props {
  views: string[],
  openViewer: (i: number) => void,
  className?: string,
}

const Viewer: React.FC<Props> = ({ className, views, openViewer }) => {
  return (
  <div className={cx('media-gallery')}>
    {views.length > 0 && (
      <div className={cx('view', className)} >
        {views.length === 1 ? (
          <Image className={cx('img-single')} src={views[0]} alt='' onClick={() => openViewer(0)} />
        ) : views.length === 2 ? (
          <div className={cx('img-grid', 'two')}>
            {views.map((view, index) => (
              <Image className={cx('img-item')} key={index} src={view} alt='' onClick={() => openViewer(index)} />
            ))}
          </div>
        ) : views.length === 3 ? (
          <div className={cx('img-grid', 'three')}>
            {views.map((view, index) => (
              <Image className={cx('img-item')} key={index} src={view} alt='' onClick={() => openViewer(index)} />
            ))}
          </div>
        ) : views.length > 3 ? (
          <div className={cx('img-grid', 'more')}>
            {views.slice(0, 4).map((view, index) => (
              <Image className={cx('img-item')} key={index} src={view} alt='' onClick={() => openViewer(index)} />
            ))}
            {views.length > 4 && (
              <div className={cx('more-overlay')}>+{views.length - 4}</div>
            )}
          </div>
        ) : null}
      </div>
    )}
  </div>)
}

export default Viewer;
