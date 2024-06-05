import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { LikedActiveIcon } from "../../components/Icons"
import { faFaceAngry, faFaceGrinHearts, faFaceSadTear, faFaceSmile, faFaceTired } from "@fortawesome/free-regular-svg-icons"
import classNames from "classnames/bind";
import styles from "./IconsReact.module.scss";

const cx = classNames.bind(styles);

export const IconReact = () => {
  return [
    {
      icon: <LikedActiveIcon className={cx('icons-item')}/>,
      action: 0,
      actionIcon: <LikedActiveIcon className={cx('icons-item', 'active')}/>,
    },
    {
      icon: <FontAwesomeIcon className={cx('icons-item')} icon={faFaceSmile}/>,
      action: 1,
      actionIcon: <FontAwesomeIcon className={cx('icons-item', 'active')} icon={faFaceSmile}/>,
    },
    {
      icon: <FontAwesomeIcon className={cx('icons-item')} icon={faFaceSadTear}/>,
      action: 2,
      actionIcon: <FontAwesomeIcon className={cx('icons-item', 'active')} icon={faFaceSadTear}/>,
    },
    {
      icon: <FontAwesomeIcon className={cx('icons-item')} icon={faFaceTired}/>,
      action: 3,
      actionIcon: <FontAwesomeIcon className={cx('icons-item', 'active')} icon={faFaceTired}/>,
    },
    {
      icon: <FontAwesomeIcon className={cx('icons-item')} icon={faFaceGrinHearts}/>,
      action: 4,
      actionIcon: <FontAwesomeIcon className={cx('icons-item', 'active')} icon={faFaceGrinHearts}/>,
    },
    {
      icon: <FontAwesomeIcon className={cx('icons-item')} icon={faFaceAngry}/>,
      action: 5,
      actionIcon: <FontAwesomeIcon className={cx('icons-item', 'active')} icon={faFaceAngry}/>,
    }
  ]
}
