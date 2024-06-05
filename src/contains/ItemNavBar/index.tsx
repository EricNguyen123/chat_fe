import config from '../../config';
import { AvatarIcon, HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, MessagesActiveIcon, MessagesIcon, UserGroupActiveIcon, UserGroupIcon } from '../../components/Icons';
import { useTranslation } from 'react-i18next';

export const itemNavBar = (currentUser: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation('navbar');
  const data = localStorage.data ? JSON.parse(localStorage.data) : undefined;

  return [
    {
      title: t("navbar.home"),
      path: config.routes.home,
      icon: <HomeIcon/>,
      activeIcon: <HomeActiveIcon/>
    },
    {
      title: t("navbar.following"),
      path: config.routes.following,
      icon: <UserGroupIcon/>,
      activeIcon: <UserGroupActiveIcon/>
    },
    {
      title: t("navbar.live"),
      path: config.routes.live,
      icon: <LiveIcon/>,
      activeIcon: <LiveActiveIcon/>
    },
    {
      title: t("navbar.messages"),
      path: config.routes.messages,
      icon: <MessagesIcon/>,
      activeIcon: <MessagesActiveIcon/>
    },
    {
      title: t("navbar.profile"),
      path: data ? `/profiles/${data.id}` : '#',
      icon: <AvatarIcon avatar={currentUser && currentUser.imagAvatar ? currentUser.imagAvatar : undefined}/>,
      activeIcon: <AvatarIcon avatar={currentUser && currentUser.imagAvatar ? currentUser.imagAvatar : undefined}/>
    }
  ]
}
