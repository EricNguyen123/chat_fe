import { RoleEnum } from '../common/general';
export type RouteType = {
    path: string;
    component: any;
    exact: boolean;
    isPublic: boolean;
    role?: RoleEnum;
};

export interface MediaItem {
    mediaType?: string;
    mediaUrl?: string;
    file?: File;
}

export interface PostData {
    body: string;
    status: string;
    userId: string;
    parentId?: string;
    mediaItems: MediaItem[];
}
