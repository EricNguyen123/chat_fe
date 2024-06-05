import React, { useEffect, useState } from 'react';
import Image from '../Image';

interface Props {
    className?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
    avatar?: any;
    fill?: any;
}

export const UploadIcon: React.FC<Props> = ({ width = '3.2rem', height = '3.2rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.1571 13.8359L21.9247 12.3786C21.4686 9.51917 18.9876 7.3335 16 7.3335C12.6863 7.3335 10 10.0197 9.99996 13.3334L10.0011 15.2304L8.11578 15.3398C6.19293 15.4513 4.66663 17.0482 4.66663 19.0002C4.66663 21.0252 6.30825 22.6668 8.33329 22.6668H15.3333V17.0813L14.1785 18.236C13.9182 18.4964 13.4961 18.4964 13.2357 18.236L12.7643 17.7646C12.504 17.5043 12.504 17.0822 12.7643 16.8218L15.862 13.7242C16.1223 13.4638 16.5444 13.4638 16.8048 13.7242L19.9024 16.8218C20.1628 17.0822 20.1628 17.5043 19.9024 17.7646L19.431 18.236C19.1706 18.4964 18.7485 18.4964 18.4882 18.236L17.3333 17.0811V22.6668H23C25.3932 22.6668 27.3333 20.7267 27.3333 18.3335C27.3333 16.151 25.7179 14.3423 23.6181 14.0437L22.1571 13.8359ZM8.33329 24.6668H15.3333H17.3333H23C26.4978 24.6668 29.3333 21.8313 29.3333 18.3335C29.3333 15.1411 26.9714 12.5005 23.8997 12.0636C23.2913 8.24881 19.9861 5.3335 16 5.3335C11.5817 5.3335 7.99996 8.91522 7.99996 13.3335L7.99996 13.3431C5.0255 13.5157 2.66663 15.9824 2.66663 19.0002C2.66663 22.1298 5.20368 24.6668 8.33329 24.6668Z"
        ></path>
    </svg>
);

export const MessageIcon: React.FC<Props> = ({ width = '2.6rem', height = '2.6rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 17.3226 32.1966 17.612L20.377 24.8856Z"
        ></path>
    </svg>
);

export const InboxIcon: React.FC<Props> = ({ width = '3.2rem', height = '3.2rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"
        ></path>
    </svg>
);

export const Search1Icon: React.FC<Props> = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="rgba(22, 24, 35, .34)"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
        ></path>
    </svg>
);

export const SearchIcon: React.FC<Props> = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
        ></path>
    </svg>
);

export const HomeIcon: React.FC<Props> = ({ width = '3.2rem', height = '3.2rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.0484 7.84003C23.6014 7.38666 24.3975 7.38666 24.9504 7.84001L41.051 21.04C41.5411 21.4418 41.7258 22.1082 41.5125 22.705C41.2991 23.3017 40.7338 23.7 40.1 23.7H37.769L36.5769 36.7278C36.4592 38.0149 35.3798 39 34.0873 39H13.9127C12.6202 39 11.5409 38.0149 11.4231 36.7278L10.231 23.7H7.89943C7.2657 23.7 6.70035 23.3017 6.487 22.705C6.27364 22.1083 6.45833 21.4418 6.9484 21.04L23.0484 7.84003ZM23.9995 10.9397L12.0948 20.7H12.969L14.369 36H22.4994V28.3138C22.4994 27.7616 22.9471 27.3138 23.4994 27.3138H24.4994C25.0517 27.3138 25.4994 27.7616 25.4994 28.3138V36H33.631L35.031 20.7H35.9045L23.9995 10.9397Z"
        ></path>
    </svg>
);

export const HomeActiveIcon: React.FC<Props> = ({ width = '3.2rem', height = '3.2rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.9505 7.84001C24.3975 7.38666 23.6014 7.38666 23.0485 7.84003L6.94846 21.04C6.45839 21.4418 6.2737 22.1083 6.48706 22.705C6.70041 23.3017 7.26576 23.7 7.89949 23.7H10.2311L11.4232 36.7278C11.5409 38.0149 12.6203 39 13.9128 39H21.5C22.0523 39 22.5 38.5523 22.5 38V28.3153C22.5 27.763 22.9477 27.3153 23.5 27.3153H24.5C25.0523 27.3153 25.5 27.763 25.5 28.3153V38C25.5 38.5523 25.9477 39 26.5 39H34.0874C35.3798 39 36.4592 38.0149 36.577 36.7278L37.7691 23.7H40.1001C40.7338 23.7 41.2992 23.3017 41.5125 22.705C41.7259 22.1082 41.5412 21.4418 41.0511 21.04L24.9505 7.84001Z"
        ></path>
    </svg>
);

export const UserGroupIcon: React.FC<Props> = ({ width = '3.2rem', height = '3.2rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 12.5C15.5897 12.5 13.5849 14.5018 13.5849 17.0345C13.5849 19.5672 15.5897 21.569 18 21.569C20.4103 21.569 22.4151 19.5672 22.4151 17.0345C22.4151 14.5018 20.4103 12.5 18 12.5ZM10.5849 17.0345C10.5849 12.9017 13.8766 9.5 18 9.5C22.1234 9.5 25.4151 12.9017 25.4151 17.0345C25.4151 21.1673 22.1234 24.569 18 24.569C13.8766 24.569 10.5849 21.1673 10.5849 17.0345ZM18 29.8793C14.0801 29.8793 10.7403 32.5616 9.69697 36.2673C9.5473 36.7989 9.03833 37.1708 8.49337 37.0811L7.50662 36.9189C6.96166 36.8292 6.58837 36.3131 6.72325 35.7776C8.00732 30.6788 12.5509 26.8793 18 26.8793C23.449 26.8793 27.9927 30.6788 29.2767 35.7776C29.4116 36.3131 29.0383 36.8292 28.4934 36.9189L27.5066 37.0811C26.9617 37.1708 26.4527 36.7989 26.303 36.2673C25.2597 32.5616 21.9199 29.8793 18 29.8793Z"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33 31.5371C32.2445 31.5371 31.5198 31.668 30.8447 31.9093C30.3246 32.0951 29.7189 31.9243 29.4549 31.4392L28.9769 30.5608C28.713 30.0757 28.8907 29.463 29.4009 29.2516C30.513 28.791 31.7285 28.5371 33 28.5371C37.4554 28.5371 41.1594 31.6303 42.2706 35.7812C42.4135 36.3147 42.0386 36.8308 41.4935 36.9196L40.5065 37.0804C39.9614 37.1692 39.4546 36.7956 39.2894 36.2686C38.4217 33.5 35.91 31.5371 33 31.5371Z"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33 18.5C31.6193 18.5 30.5 19.6193 30.5 21C30.5 22.3807 31.6193 23.5 33 23.5C34.3807 23.5 35.5 22.3807 35.5 21C35.5 19.6193 34.3807 18.5 33 18.5ZM27.5 21C27.5 17.9624 29.9624 15.5 33 15.5C36.0376 15.5 38.5 17.9624 38.5 21C38.5 24.0376 36.0376 26.5 33 26.5C29.9624 26.5 27.5 24.0376 27.5 21Z"
        ></path>
    </svg>
);

export const UserGroupActiveIcon: React.FC<Props> = ({ width = '3.2rem', height = '3.2rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M25.5 17C25.5 21.1421 22.1421 24.5 18 24.5C13.8579 24.5 10.5 21.1421 10.5 17C10.5 12.8579 13.8579 9.5 18 9.5C22.1421 9.5 25.5 12.8579 25.5 17Z"></path>
        <path d="M7.10396 34.7906C8.78769 30.2189 12.8204 27 18.0009 27C23.1818 27 27.2107 30.2213 28.8958 34.7898C29.3075 35.906 28.6141 37 27.5 37H8.5C7.38629 37 6.69289 35.9067 7.10396 34.7906Z"></path>
        <path d="M40.6308 37H32C31.2264 34.1633 30.0098 31.5927 28.144 29.7682C29.5384 28.9406 31.1829 28.5 33 28.5C37.239 28.5 40.536 30.8992 41.9148 35.0108C42.2516 36.0154 41.5423 37 40.6308 37Z"></path>
        <path d="M33 26.5C36.0376 26.5 38.5 24.0376 38.5 21C38.5 17.9624 36.0376 15.5 33 15.5C29.9624 15.5 27.5 17.9624 27.5 21C27.5 24.0376 29.9624 26.5 33 26.5Z"></path>
    </svg>
);

export const LiveIcon: React.FC<Props> = ({ width = '3.2rem', height = '3.2rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.78511 10.3334C6.95518 10.3334 6.33301 10.9792 6.33301 11.7143V20.2858C6.33301 21.0209 6.95518 21.6667 7.78511 21.6667H18.5744C19.4043 21.6667 20.0265 21.0209 20.0265 20.2858V17.5602C20.0265 17.1826 20.2392 16.8372 20.5763 16.6672C20.9135 16.4973 21.3177 16.5317 21.6212 16.7563L25.6663 19.7488V12.2513L21.6212 15.2439C21.3177 15.4684 20.9135 15.5029 20.5763 15.3329C20.2392 15.1629 20.0265 14.8175 20.0265 14.4399V11.7143C20.0265 10.9792 19.4043 10.3334 18.5744 10.3334H7.78511ZM25.6855 12.2371C25.6831 12.2388 25.6839 12.2383 25.6839 12.2383L25.6855 12.2371ZM25.6716 12.2177C25.673 12.2212 25.6746 12.2243 25.6763 12.2269C25.6798 12.2324 25.6834 12.2355 25.6855 12.2371L25.6874 12.2383C25.6874 12.2383 25.6865 12.238 25.6839 12.2383M4.33301 11.7143C4.33301 9.81952 5.90653 8.33337 7.78511 8.33337H18.5744C20.453 8.33337 22.0265 9.81953 22.0265 11.7143V12.4562L24.4963 10.629C25.0929 10.1877 25.8879 10.1155 26.5542 10.4359C27.224 10.758 27.6663 11.4325 27.6663 12.1905V19.8096C27.6663 20.5676 27.224 21.2421 26.5542 21.5642C25.888 21.8846 25.0929 21.8124 24.4963 21.371L22.0265 19.5439V20.2858C22.0265 22.1806 20.453 23.6667 18.5744 23.6667H7.78511C5.90653 23.6667 4.33301 22.1806 4.33301 20.2858V11.7143Z"
        ></path>
        <path d="M15 15.134C15.6667 15.5189 15.6667 16.4811 15 16.866L12 18.5981C11.3333 18.983 10.5 18.5019 10.5 17.7321L10.5 14.2679C10.5 13.4981 11.3333 13.017 12 13.4019L15 15.134Z"></path>
    </svg>
);

export const LiveActiveIcon: React.FC<Props> = ({ width = '3.2rem', height = '3.2rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M6.5 17.5714C6.5 14.7292 8.86029 12.5 11.6782 12.5H27.8621C30.6799 12.5 33.0402 14.7292 33.0402 17.5714V18.6843L36.745 15.9435C37.6399 15.2815 38.8324 15.1731 39.8318 15.6537C40.8365 16.1369 41.5 17.1486 41.5 18.2857V29.7143C41.5 30.8514 40.8365 31.8631 39.8318 32.3463C38.8324 32.8269 37.6399 32.7185 36.745 32.0565L33.0402 29.3158V30.4286C33.0402 33.2708 30.6799 35.5 27.8621 35.5H11.6782C8.86029 35.5 6.5 33.2708 6.5 30.4286V17.5714Z"></path>
        <path
            d="M23.25 23.134C23.9167 23.5189 23.9167 24.4811 23.25 24.866L17.25 28.3301C16.5833 28.715 15.75 28.2339 15.75 27.4641L15.75 20.5359C15.75 19.7661 16.5833 19.285 17.25 19.6699L23.25 23.134Z"
            fill="white"
        ></path>
    </svg>
);

export const AvatarIcon: React.FC<Props> = ({
    borderRadius = '50%',
    width = '30px',
    height = '30px',
    className,
    avatar,
}) => {
    const [image, setImage] = useState('');

    useEffect(() => {
        if (avatar) {
            setImage(process.env.REACT_APP_BASE_URL + avatar);
        }
    }, [avatar]);
    return <Image borderRadius={borderRadius} width={width} height={height} src={image} alt="" className={className} />;
};

export const EditIcon: React.FC<Props> = ({ width = '1em', height = '1em', className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height}>
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M15.393 2.226a.84.84 0 0 0-1.17.02L8.142 8.33a.84.84 0 0 0-.247.595v2.34c0 .464.377.841.842.841h2.183a.84.84 0 0 0 .596-.246l6.237-6.238a.843.843 0 0 0-.02-1.211zM9.58 9.273l5.26-5.26 1.107 1.033-5.374 5.375H9.58zM9.58 2a.42.42 0 0 1 .42.421v.842a.42.42 0 0 1-.42.421H4.526a.84.84 0 0 0-.842.842v10.948c0 .465.377.842.842.842h10.947a.84.84 0 0 0 .842-.842V10.42c0-.232.189-.421.421-.421h.842c.233 0 .422.188.422.421v5.053A2.526 2.526 0 0 1 15.473 18H4.526A2.526 2.526 0 0 1 2 15.474V4.526A2.526 2.526 0 0 1 4.526 2z"
            clipRule="evenodd"
        ></path>
    </svg>
);

export const UnFollow: React.FC<Props> = ({ width = '20px', height = '20px', className }) => (
    <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0001 13C13.0001 9.68629 15.6864 7 19.0001 7C22.3139 7 25.0001 9.68629 25.0001 13C25.0001 16.3137 22.3139 19 19.0001 19C15.6864 19 13.0001 16.3137 13.0001 13ZM19.0001 3C13.4773 3 9.00015 7.47715 9.00015 13C9.00015 18.5228 13.4773 23 19.0001 23C24.523 23 29.0001 18.5228 29.0001 13C29.0001 7.47715 24.523 3 19.0001 3ZM5.19435 40.9681C6.70152 35.5144 10.0886 32.2352 13.9162 30.738C17.7125 29.2531 22.0358 29.4832 25.6064 31.2486C26.1015 31.4934 26.7131 31.338 26.9931 30.8619L28.0072 29.1381C28.2872 28.662 28.1294 28.0465 27.6384 27.7937C23.0156 25.4139 17.4034 25.0789 12.4591 27.0129C7.37426 29.0018 3.09339 33.3505 1.2883 40.0887C1.14539 40.6222 1.48573 41.1592 2.02454 41.2805L3.97575 41.7195C4.51457 41.8408 5.04724 41.5004 5.19435 40.9681ZM44.7074 30.1212C45.0979 29.7307 45.0979 29.0975 44.7074 28.707L43.2932 27.2928C42.9026 26.9023 42.2695 26.9023 41.8789 27.2928L30.0003 39.1715L25.1216 34.2928C24.7311 33.9023 24.0979 33.9023 23.7074 34.2928L22.2932 35.707C21.9026 36.0975 21.9026 36.7307 22.2932 37.1212L28.586 43.4141C29.3671 44.1952 30.6334 44.1952 31.4145 43.4141L44.7074 30.1212Z"
        ></path>
    </svg>
);

export const UploadImage: React.FC<Props> = ({ width = '20px', height = '80px', fill, className }) => (
    <svg height={height} fill={fill} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
        <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
        <g id="SVGRepo_iconCarrier">
            <path
                fill=""
                d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                clipRule="evenodd"
                fillRule="evenodd"
            ></path>
        </g>
    </svg>
);

export const ButtonFr: React.FC<Props> = ({ width = '20px', height = '20px', className }) => (
    <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.9999 7C15.6862 7 12.9999 9.68629 12.9999 13C12.9999 16.3137 15.6862 19 18.9999 19C22.3136 19 24.9999 16.3137 24.9999 13C24.9999 9.68629 22.3136 7 18.9999 7ZM8.9999 13C8.9999 7.47715 13.4771 3 18.9999 3C24.5228 3 28.9999 7.47715 28.9999 13C28.9999 18.5228 24.5228 23 18.9999 23C13.4771 23 8.9999 18.5228 8.9999 13ZM13.9159 30.738C10.0883 32.2352 6.70127 35.5144 5.19411 40.9681C5.047 41.5004 4.51432 41.8408 3.97551 41.7195L2.0243 41.2805C1.48549 41.1592 1.14514 40.6222 1.28805 40.0887C3.09315 33.3505 7.37401 29.0018 12.4589 27.0129C17.4031 25.0789 23.0153 25.4139 27.6381 27.7937C28.1292 28.0465 28.287 28.662 28.0069 29.1381L26.9929 30.8619C26.7129 31.338 26.1013 31.4934 25.6062 31.2486C22.0356 29.4832 17.7123 29.2531 13.9159 30.738ZM39.832 28.4453C40.2915 28.1389 40.9124 28.2631 41.2187 28.7227L44.664 33.8906C45.0731 34.5043 45.1113 35.2934 44.7633 35.9437C44.4152 36.594 43.7375 37 42.9999 37H27.9999C27.4476 37 26.9999 36.5523 26.9999 36V34C26.9999 33.4477 27.4476 33 27.9999 33H39.2629L37.8905 30.9415C37.5842 30.4819 37.7083 29.8611 38.1679 29.5547L39.832 28.4453ZM27.2366 40.0563C27.5846 39.406 28.2623 39 28.9999 39H43.9999C44.5522 39 44.9999 39.4477 44.9999 40V42C44.9999 42.5523 44.5522 43 43.9999 43H32.7369L34.1093 45.0585C34.4157 45.5181 34.2915 46.1389 33.832 46.4453L32.1679 47.5547C31.7083 47.8611 31.0875 47.7369 30.7811 47.2774L27.3358 42.1094C26.9267 41.4957 26.8885 40.7066 27.2366 40.0563Z"
        ></path>
    </svg>
);

export const PlusImport: React.FC<Props> = ({ width = '1em', height = '1em', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 2.5C7.58579 2.5 7.25 2.83579 7.25 3.25V7.25H3.25C2.83579 7.25 2.5 7.58579 2.5 8C2.5 8.41421 2.83579 8.75 3.25 8.75H7.25V12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75V8.75H12.75C13.1642 8.75 13.5 8.41421 13.5 8C13.5 7.58579 13.1642 7.25 12.75 7.25H8.75V3.25C8.75 2.83579 8.41421 2.5 8 2.5Z"
        ></path>
    </svg>
);

export const CloseButton: React.FC<Props> = ({ width = '18px', height = '18px', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 9 10"
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M1.35299 0.792837L4.49961 3.93944L7.64545 0.792566C7.8407 0.597249 8.15733 0.597223 8.35262 0.792508L8.70669 1.14658C8.90195 1.34184 8.90195 1.65842 8.70669 1.85368L5.56027 5.0001L8.70672 8.14655C8.90198 8.34181 8.90198 8.65839 8.70672 8.85366L8.35316 9.20721C8.1579 9.40247 7.84132 9.40247 7.64606 9.20721L4.49961 6.06076L1.35319 9.20719C1.15793 9.40245 0.841345 9.40245 0.646083 9.20719L0.292629 8.85373C0.0973708 8.65847 0.0973653 8.3419 0.292617 8.14664L3.43895 5.0001L0.292432 1.85357C0.0972034 1.65834 0.0971656 1.34182 0.292347 1.14655L0.645801 0.792924C0.841049 0.597582 1.1577 0.597543 1.35299 0.792837Z"></path>
    </svg>
);

export const PlusFollow: React.FC<Props> = ({ width = '1em', height = '1em', className }) => (
    <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
    >
        <path d="M26 7a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v15H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h15v15a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V26h15a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H26V7Z"></path>
    </svg>
);

export const IconHeart: React.FC<Props> = ({ width = '24px', height = '24px', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#HeartFill_clip0)">
            <g filter="url(#HeartFill_filter0_d)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.5 2.25C10.5 2.25 12 4.25 12 4.25C12 4.25 13.5 2.25 16.5 2.25C20 2.25 22.5 4.99999 22.5 8.5C22.5 12.5 19.2311 16.0657 16.25 18.75C14.4095 20.4072 13 21.5 12 21.5C11 21.5 9.55051 20.3989 7.75 18.75C4.81949 16.0662 1.5 12.5 1.5 8.5C1.5 4.99999 4 2.25 7.5 2.25Z"
                ></path>
            </g>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.40179 12.1998C3.58902 14.6966 5.7592 16.9269 7.74989 18.75C9.5504 20.3989 10.9999 21.5 11.9999 21.5C12.9999 21.5 14.4094 20.4072 16.2499 18.75C19.231 16.0657 22.4999 12.5 22.4999 8.49997C22.4999 8.41258 22.4983 8.32566 22.4952 8.23923C20.5671 13.6619 13.6787 18.5 11.75 18.5C10.3127 18.5 5.61087 15.8131 2.40179 12.1998Z"
                fillOpacity="0.03"
            ></path>
        </g>
        <defs>
            <filter
                id="HeartFill_filter0_d"
                x="-0.9"
                y="1.05"
                width="25.8"
                height="24.05"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                ></feColorMatrix>
                <feOffset dy="1.2"></feOffset>
                <feGaussianBlur stdDeviation="1.2"></feGaussianBlur>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
            </filter>
            <clipPath id="HeartFill_clip0">
                <rect width="24" height="24" fill="white"></rect>
            </clipPath>
        </defs>
    </svg>
);

export const IconCmt: React.FC<Props> = ({ width = '24px', height = '24px', className }) => (
    <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        fill="currentColor"
    >
        <path
            fillRule="evenodd"
            d="M2 21.5c0-10.22 9.88-18 22-18s22 7.78 22 18c0 5.63-3.19 10.74-7.32 14.8a43.6 43.6 0 0 1-14.14 9.1A1.5 1.5 0 0 1 22.5 44v-5.04C11.13 38.4 2 31.34 2 21.5M14 25a3 3 0 1 0 0-6 3 3 0 0 0 0 6m10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6m13-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
            clipRule="evenodd"
        ></path>
    </svg>
);

export const IconSend: React.FC<Props> = ({ width = '24px', height = '24px', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 664 663"
    >
        <path
            fill="none"
            d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
        ></path>
        <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="33.67"
            stroke="#6c6c6c"
            d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
        ></path>
    </svg>
);

export const LikeCommentIcon: React.FC<Props> = ({ width = '20px', height = '20px', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 9.01703C19.0025 3.74266 11.4674 3.736 6.67302 8.56049C1.77566 13.4886 1.77566 21.4735 6.67302 26.4016L22.5814 42.4098C22.9568 42.7876 23.4674 43 24 43C24.5326 43 25.0432 42.7876 25.4186 42.4098L41.327 26.4016C46.2243 21.4735 46.2243 13.4886 41.327 8.56049C36.5326 3.736 28.9975 3.74266 24 9.01703ZM21.4938 12.2118C17.9849 8.07195 12.7825 8.08727 9.51028 11.3801C6.16324 14.7481 6.16324 20.214 9.51028 23.582L24 38.1627L38.4897 23.582C41.8368 20.214 41.8368 14.7481 38.4897 11.3801C35.2175 8.08727 30.0151 8.07195 26.5062 12.2118L26.455 12.2722L25.4186 13.3151C25.0432 13.6929 24.5326 13.9053 24 13.9053C23.4674 13.9053 22.9568 13.6929 22.5814 13.3151L21.545 12.2722L21.4938 12.2118Z"
        ></path>
    </svg>
);

export const LikeCommentActiveIcon: React.FC<Props> = ({ width = '20px', height = '20px', className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        fill="rgba(254, 44, 85, 1)"
    >
        <g fillRule="evenodd" clipPath="url(#heart-fill-52d919d9_a)" clipRule="evenodd">
            <path d="M7.5 2.25c3 0 4.5 2 4.5 2s1.5-2 4.5-2c3.5 0 6 2.75 6 6.25 0 4-3.269 7.566-6.25 10.25C14.41 20.407 13 21.5 12 21.5s-2.45-1.101-4.25-2.75C4.82 16.066 1.5 12.5 1.5 8.5c0-3.5 2.5-6.25 6-6.25"></path>
            <path
                fill="black"
                fillOpacity=".03"
                d="M2.402 12.2c1.187 2.497 3.357 4.727 5.348 6.55C9.55 20.399 11 21.5 12 21.5s2.41-1.093 4.25-2.75c2.98-2.684 6.25-6.25 6.25-10.25q0-.13-.005-.26C20.567 13.661 13.68 18.5 11.75 18.5c-1.437 0-6.14-2.687-9.348-6.3"
            ></path>
        </g>
        <defs>
            <clipPath id="heart-fill-52d919d9_a">
                <path fill="white" d="M0 0h24v24H0z"></path>
            </clipPath>
        </defs>
    </svg>
);

export const MoreIcon: React.FC<Props> = ({ width = '24px', height = '24px', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 24C4 21.7909 5.79086 20 8 20C10.2091 20 12 21.7909 12 24C12 26.2091 10.2091 28 8 28C5.79086 28 4 26.2091 4 24ZM20 24C20 21.7909 21.7909 20 24 20C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24ZM36 24C36 21.7909 37.7909 20 40 20C42.2091 20 44 21.7909 44 24C44 26.2091 42.2091 28 40 28C37.7909 28 36 26.2091 36 24Z"
        ></path>
    </svg>
);

export const DeleteIcon: React.FC<Props> = ({ width = '1em', height = '1em', className }) => (
    <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
    >
        <path d="M32 6v2h11a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2.68L38.78 37c-.2 3.17-.29 4.76-.97 5.96a6 6 0 0 1-2.6 2.45c-1.24.6-2.83.6-6 .6H18.8c-3.18 0-4.77 0-6.01-.6a6 6 0 0 1-2.6-2.45c-.68-1.2-.78-2.79-.97-5.96L7.68 12H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h11V6a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5ZM21 5a1 1 0 0 0-1 1v2h8V6a1 1 0 0 0-1-1h-6Zm-2.19 13.5a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h2.13a1 1 0 0 0 1-1v-15a1 1 0 0 0-1-1H18.8Zm7.25 1v15a1 1 0 0 0 1 1h2.13a1 1 0 0 0 1-1v-15a1 1 0 0 0-1-1h-2.13a1 1 0 0 0-1 1Z"></path>
    </svg>
);

export const TickIcon: React.FC<Props> = ({ width = '1em', height = '1em', className }) => (
    <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
    >
        <path d="m19.71 36.03 19.73-30.5a1 1 0 0 1 1.39-.3l2.35 1.53c.46.3.6.92.3 1.38L22.01 41.3a2.4 2.4 0 0 1-3.83.28L4.85 26.33a1 1 0 0 1 .1-1.4l2.1-1.85a1 1 0 0 1 1.42.1L19.7 36.02Z"></path>
    </svg>
);

export const MessagesIcon: React.FC<Props> = ({ width = '3.2rem', height = '3.2rem', className }) => (
    <svg
        aria-label="Messenger"
        fill="currentColor"
        role="img"
        viewBox="0 0 32 32"
        className={className}
        width={width}
        height={height}
    >
        <title>Messenger</title>
        <path
            d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="1.739"
        ></path>
        <path
            d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
            fillRule="evenodd"
        ></path>
    </svg>
);

export const MessagesActiveIcon: React.FC<Props> = ({ width = '3.2rem', height = '3.2rem', className }) => (
    <svg
        aria-label="Messenger"
        fill="currentColor"
        role="img"
        viewBox="0 0 32 32"
        className={className}
        width={width}
        height={height}
    >
        <title>Messenger</title>
        <path
            d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="1.739"
        ></path>
        <path
            d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
            fill="white"
        ></path>
    </svg>
);

export const LikedIcon: React.FC<Props> = ({ width = '20px', height = '20px', className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        fill="rgba(254, 44, 85, 1)"
    >
        <g fillRule="evenodd" clipPath="url(#heart-fill-52d919d9_a)" clipRule="evenodd">
            <path d="M7.5 2.25c3 0 4.5 2 4.5 2s1.5-2 4.5-2c3.5 0 6 2.75 6 6.25 0 4-3.269 7.566-6.25 10.25C14.41 20.407 13 21.5 12 21.5s-2.45-1.101-4.25-2.75C4.82 16.066 1.5 12.5 1.5 8.5c0-3.5 2.5-6.25 6-6.25"></path>
            <path
                fill="black"
                fillOpacity=".03"
                d="M2.402 12.2c1.187 2.497 3.357 4.727 5.348 6.55C9.55 20.399 11 21.5 12 21.5s2.41-1.093 4.25-2.75c2.98-2.684 6.25-6.25 6.25-10.25q0-.13-.005-.26C20.567 13.661 13.68 18.5 11.75 18.5c-1.437 0-6.14-2.687-9.348-6.3"
            ></path>
        </g>
        <defs>
            <clipPath id="heart-fill-52d919d9_a">
                <path fill="white" d="M0 0h24v24H0z"></path>
            </clipPath>
        </defs>
    </svg>
);

export const LikedActiveIcon: React.FC<Props> = ({ width = '24px', height = '24px', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#LikeRedShadowColor_filter0_d)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 4.5C21 4.5 24 8.5 24 8.5C24 8.5 27 4.5 33 4.5C40 4.5 45 9.99998 45 17C45 25 38.4622 32.1314 32.5 37.5C28.8191 40.8144 26 43 24 43C22 43 19.101 40.7978 15.5 37.5C9.63898 32.1325 3 25 3 17C3 9.99998 8 4.5 15 4.5Z"
                fill="#FE2C55"
            ></path>
        </g>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.80371 24.3995C7.17815 29.3932 11.5185 33.8538 15.4999 37.4999C19.1009 40.7978 21.9999 42.9999 23.9999 42.9999C25.9999 42.9999 28.819 40.8144 32.4999 37.4999C38.4621 32.1314 44.9999 24.9999 44.9999 16.9999C44.9999 16.8252 44.9968 16.6513 44.9906 16.4785C41.1344 27.3238 27.3575 37 23.5001 37C20.6255 37 11.2219 31.6262 4.80371 24.3995Z"
            fill="black"
            fillOpacity="0.03"
        ></path>
        <defs>
            <filter
                id="LikeRedShadowColor_filter0_d"
                x="0.6"
                y="3.3"
                width="46.8"
                height="43.3"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></feColorMatrix>
                <feOffset dy="1.2"></feOffset>
                <feGaussianBlur stdDeviation="1.2"></feGaussianBlur>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
            </filter>
        </defs>
    </svg>
);
