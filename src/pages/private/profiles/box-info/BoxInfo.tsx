import classNames from 'classnames/bind';
import styles from './BoxInfo.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../../components/Loading';
import { Link, useNavigate } from 'react-router-dom';
import config from '../../../../config';
import { EditIcon, UserIcon } from '../../../../components/Icons';
import ButtonCustom from '../../../../components/ButtonCustom';
import { useEffect } from 'react';
import { getOtherUser, getUser } from '../../../../redux/users/actions';
import { useTranslation } from 'react-i18next';

const cx = classNames.bind(styles);

const BoxInfo = () => {
  const dispatch = useDispatch();
  const userSelector = useSelector(({ users } : any) => users);
  const { t } = useTranslation("header");
  const data = JSON.parse(localStorage.data);
  const navigate = useNavigate();
  const handleRedirectPage = (path: string) => {
    navigate(path);
  };

  const statusInfos = [
    {
      status: t("status.following"),
      number: 0,
    },
    {
      status: t("status.followed"),
      number: 0,
    },
    {
      status: t("status.liked"),
      number: 0,
    }
  ]

  return (
    <div className={cx('wrapper')}>
      <Loading isLoading={userSelector.loading}/>
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
                  userSelector.userInfo.id === data.id && 
                  (<ButtonCustom size={"136-36-4"}>
                    <EditIcon className={cx('edit-icon')}/>
                    <span className={cx('font-name')}>Edit Profiles</span>
                  </ButtonCustom>)
                }
                {/* <ButtonCustom size={"164-36-4"}>
                  <span className={cx('font-name')}>Message</span>
                </ButtonCustom> */}
                {/* <ButtonCustom size={"208-36-4"}>
                  <span className={cx('font-name')}>Follow</span>
                </ButtonCustom> */}
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
