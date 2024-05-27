import classNames from 'classnames/bind';
import styles from './BoxInfo.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EditIcon, UnFollow } from '../../../../components/Icons';
import ButtonCustom from '../../../../components/ButtonCustom';
import { useEffect, useState } from 'react';
import { following, unfollow } from '../../../../redux/users/actions';
import { useTranslation } from 'react-i18next';
import ImageUpload from '../../../../components/ImageUpload';
import Image from '../../../../components/Image';

const cx = classNames.bind(styles);

const BoxInfo = () => {
  const dispatch = useDispatch();
  let userSelector = useSelector(({ users } : any) => users);
  const media = useSelector(({ imageUpload } : any) => imageUpload);
  const [image, setImage] = useState("");
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

  useEffect(() => {
    if (userSelector && userSelector.userInfo) {
      setImage(process.env.REACT_APP_BASE_URL + userSelector.userInfo.imagAvatar)
    }
    
  }, [userSelector])

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
          <div className={cx('col-1', 'line-right')}>
            <div className={cx('img-avt')}>
              {media ? <Image className={cx('img-up')} src={image} alt=''/> :
              undefined}
            </div>
            { userSelector.userInfo && userSelector.userInfo.id === data.id ? 
            (<div className={cx('upload-img')}>
              <ImageUpload fdispath={1}/>
            </div>) : undefined }
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
