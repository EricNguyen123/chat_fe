import classNames from "classnames/bind";
import styles from "./React.module.scss";
import React, { useEffect, useState } from 'react';
import { IconHeart } from "../Icons";
import { IconReact } from "../../contains/IconReact";
import { useSelector } from "react-redux";
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

interface Props {
  reacts: any;
  onClick?: () => void;
  userId: number;
  postId: number;
  hideOnClick?: boolean;
  handleClickIcon?: (i: number) => void;
  rootIcon?: React.ReactNode;
  type?: 'none' | undefined;
}

const Reacts: React.FC<Props> =  ({ type, rootIcon, postId, reacts, onClick, userId, handleClickIcon, hideOnClick = true }) => {
  const reactsSelector = useSelector(({ reacts }: any) => reacts);
  const icons = IconReact();
  const [icon, setIcon] = useState<React.ReactNode>(rootIcon);
  const postSelector = useSelector(({ posts }: any) => posts);

  const hasUserReacted = (postId: number, userId: number) => {
    return postSelector.posts.some((post: any) =>
      parseInt(post.id, 10) === postId &&
      post.Reacts.some((react: any) => parseInt(react.userId, 10) === userId)
    );
  };

  useEffect(()=> {
    if (!hasUserReacted(postId, userId)) {
      setIcon(rootIcon)
    }
  }, [postSelector.posts])

  useEffect(() => {
    if (reactsSelector.react && reactsSelector.react.success && parseInt(reactsSelector.react.postId, 10) === postId) {
      setIcon(rootIcon)
    } else if (reactsSelector.react && parseInt(reactsSelector.react.postId, 10) === postId) {
      setIcon(icons[reactsSelector.react.action].icon);
    }
  }, [reactsSelector.react])

  useEffect(() => {
    reacts && reacts.forEach((e: any) => {
      if (e.userId === userId) {
        setIcon(icons[e.action].actionIcon);
      }
    });
  }, [reacts])

  return (
    <div className={cx('wrapper')}>
      <Tippy 
        interactive
        delay={[0, 800]}
        offset={[120, 0]}
        hideOnClick={hideOnClick}
        placement="top-end"
        interactiveBorder={10}
        trigger="mouseenter focus"
        onClickOutside={() => {}}
        render={(attrs) => (
          <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
            <div className={cx('icons')}>
              {icons.map((item, index) => (
                <div 
                  className={cx('icons-item')} 
                  key={index} 
                  onClick={()=>{handleClickIcon && handleClickIcon(item.action)}}>{item.icon}</div>
              ))}
            </div>
          </div>
        )}
      >
        <div className={cx('btn-handle-react', 'btn-handle')} onClick={onClick}>
          <span className={cx('heart-icon', 'btn-icon', `bg-${type}`)}>
            {icon}
          </span>
        </div>
      </Tippy>
    </div>
  );
}

export default Reacts;
