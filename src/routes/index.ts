import Register from '../pages/public/register';
import Login from '../pages/public/login';
import Home from '../pages/private/home';
import Profiles from '../pages/private/profiles';
import FormPost from '../pages/private/Post/FormPost';

import { RouteType } from '../types/app';

import config from '../config';
import Messages from '../pages/private/messages';

const publicRoutes: Array<RouteType> = [
    {
        path: config.routes.register,
        component: Register,
        exact: true,
        isPublic: true,
    },
    {
        path: config.routes.login,
        component: Login,
        exact: true,
        isPublic: true,
    },
];

const privateRoutes: Array<RouteType> = [
    {
        path: config.routes.home,
        component: Home,
        exact: true,
        isPublic: false,
    },
    {
        path: config.routes.profiles,
        component: Profiles,
        exact: true,
        isPublic: false,
    },
    {
        path: config.routes.user_id,
        component: Profiles,
        exact: true,
        isPublic: false,
    },
    {
        path: config.routes.upload_post,
        component: FormPost,
        exact: true,
        isPublic: false,
    },
    {
        path: config.routes.messages,
        component: Messages,
        exact: true,
        isPublic: false,
    },
    {
        path: config.routes.room_msg,
        component: Messages,
        exact: true,
        isPublic: false,
    },
];

export { publicRoutes, privateRoutes };
