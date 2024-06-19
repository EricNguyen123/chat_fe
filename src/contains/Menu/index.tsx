import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '../../config';

export const MyMenu = (t: any, userId: any) => {
    return [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: t('menu.titleProfile'),
            to: `/profiles/${userId}`,
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: t('menu.titleCoins'),
            to: '',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: t('menu.titleSettings'),
            to: '',
        },
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: t('menu.titleEnglish'),
            children: {
                title: t('menu.language'),
                data: [
                    {
                        type: t('menu.typeLanguage'),
                        code: t('menu.en'),
                        title: t('menu.titleEnglish'),
                    },
                    {
                        type: t('menu.typeLanguage'),
                        code: t('menu.vi'),
                        title: t('menu.vietnamese'),
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: t('menu.titleFeedback'),
            to: '',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: t('menu.titleKeyboard'),
        },
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: t('menu.titleLogout'),
            to: '',
            separate: true,
        },
    ];
};
