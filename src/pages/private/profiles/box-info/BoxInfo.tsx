import classNames from 'classnames/bind';
import styles from './BoxInfo.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../../components/Loading';
import { Link, useNavigate } from 'react-router-dom';
import config from '../../../../config';
import { EditIcon, UnFollow, UserIcon } from '../../../../components/Icons';
import ButtonCustom from '../../../../components/ButtonCustom';
import { useEffect } from 'react';
import { following, unfollow } from '../../../../redux/users/actions';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

const BoxInfo = () => {
  const dispatch = useDispatch();
  let userSelector = useSelector(({ users } : any) => users);
  const { t } = useTranslation("header");
  const data = JSON.parse(localStorage.data);
  const navigate = useNavigate();
  const handleRedirectPage = (path: string) => {
    navigate(path);
  };

  const statusInfos = [
    {
      status: t("status.following"),
      number:  userSelector.userInfo && userSelector.userInfo.followingCount ? 
                userSelector.userInfo.followingCount : 0,
    },
    {
      status: t("status.followed"),
      number: userSelector.userInfo && userSelector.userInfo.followerCount ? 
                userSelector.userInfo.followerCount : 0,
    },
    {
      status: t("status.liked"),
      number: 0,
    }
  ]

  const handleFollow = () => {
    dispatch(following({id: userSelector.userInfo.id}))
  }
  
  const handleUnFollow = () => {
    dispatch(unfollow({id: userSelector.userInfo.id}))
  }
  
  if(userSelector.userInfo !== undefined) {
    localStorage.setItem("userInfoCurrent", JSON.stringify(userSelector))
  }
  else if (localStorage.userInfoCurrent) {
    userSelector = JSON.parse(localStorage.userInfoCurrent);
  }
  
  return (
    <div className={cx('wrapper')}>
      {/* <Loading isLoading={userSelector.loading}/> */}
      <div className={cx('box-info')}>
        <div className={cx('row-1')}>
          <div className={cx('col-1')}>
            <UserIcon width={"116px"} height={"116px"}/>
          </div>
          <div className={cx('col-2')}>
            <div className={cx('info-name')}>
              <span className={cx('user-name', 'font-name')}>
                {userSelector.userInfo ? userSelector.userInfo.name : undefined}
              </span>
            </div>
            <div className={cx('title-name')}>
              <span className={cx('sub-name', 'font-name')}>
                {userSelector.userInfo ? userSelector.userInfo.email : undefined}
              </span>
            </div>
            <div className={cx('box-btn')}>
              <div className={cx('box-container')}>
                {
                  userSelector.userInfo && 
                  userSelector.userInfo.id === data.id ?
                  (<ButtonCustom size={"136-36-4"}>
                    <EditIcon className={cx('edit-icon')}/>
                    <span className={cx('font-name')}>Edit Profiles</span>
                  </ButtonCustom>) : userSelector.status || userSelector.isFollowing ? 
                  (<div className={cx('box-btn-fl')}>
                    <ButtonCustom size={"164-36-4"}>
                      <span className={cx('font-name')}>Message</span>
                    </ButtonCustom>
                    <div className={cx('unfollow-btn')} onClick={handleUnFollow}>
                      <UnFollow/>
                    </div>
                  </div>) :
                  (<ButtonCustom size={"208-36-4"} onClick={handleFollow}>
                    <span className={cx('font-name')}>Follow</span>
                  </ButtonCustom>)
                }
              </div>
            </div>
          </div>
        </div>
        <h3 className={cx('row-2')}>
          {statusInfos.map((item, index) => (
          <div className={cx('item')} key={index}>
            <strong className={cx('number')}>{item.number}</strong>
            <span className={cx('status')}>{item.status}</span>
          </div>))}
        </h3>
        <h2 className={cx('row-3')}>

        </h2>
      </div>
    </div>
  );
};

export default BoxInfo;
