import config from '../../config';
import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon, UserIcon } from '../../components/Icons';
import { useTranslation } from 'react-i18next';


export const itemNavBar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation('navbar');
  const data = localStorage.data ? JSON.parse(localStorage.data) : undefined;
  return [
    {
      title: t("navbar.home"),
      path: config.routes.home,
      icon: HomeIcon,
      activeIcon: HomeActiveIcon
    },
    {
      title: t("navbar.following"),
      path: config.routes.following,
      icon: UserGroupIcon,
      activeIcon: UserGroupActiveIcon
    },
    {
      title: t("navbar.live"),
      path: config.routes.live,
      icon: LiveIcon,
      activeIcon: LiveActiveIcon
    },
    {
      title: t("navbar.profile"),
      path: data ? `/profiles/${data.id}` : '#',
      icon: UserIcon,
      activeIcon: UserIcon
    }
  ]
}
