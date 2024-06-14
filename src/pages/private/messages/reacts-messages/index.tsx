import classNames from 'classnames/bind';
import styles from './ReactsMessages.module.scss';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Tippy from '@tippyjs/react/headless';
import { IconReact } from '../../../../contains/IconReact';
import { setupSocketEvents } from '../../../../services/socketEvents';

const cx = classNames.bind(styles);

interface Props {
    reacts: any;
    onClick?: () => void;
    userId: number;
    messageId: number;
    hideOnClick?: boolean;
    handleClickIcon?: (i: number) => void;
    rootIcon?: React.ReactNode;
    type?: 'none' | undefined;
}

const ReactsMessages: React.FC<Props> = ({
    type,
    rootIcon,
    messageId,
    reacts,
    onClick,
    userId,
    handleClickIcon,
    hideOnClick = true,
}) => {
    const reactsSelector = useSelector(({ reacts }: any) => reacts);
    const changedMessageSelector = useSelector(({ changedMessage }: any) => changedMessage);
    const icons = IconReact();
    const [icon, setIcon] = useState<React.ReactNode>(rootIcon);
    const messagesSelector = useSelector(({ messages }: any) => messages);
    const userSelector = useSelector(({ users }: any) => users);

    const hasUserReacted = (messageId: number, userId: number) => {
        return messagesSelector.messages.some(
            (message: any) =>
                parseInt(message.id, 10) === messageId &&
                message.Reacts.some((react: any) => parseInt(react.userId, 10) === userId),
        );
    };

    useEffect(() => {
        if (!hasUserReacted(messageId, userId)) {
            const msg = messagesSelector.messages && messagesSelector.messages.find((e: any) => e.id === messageId);
            setIcon(
                msg && msg.Reacts && msg.Reacts.length > 0
                    ? icons[reacts[msg.Reacts.length - 1].action].actionIcon
                    : rootIcon,
            );
        }
    }, [messagesSelector.messages]);

    useEffect(() => {
        if (
            messageId === changedMessageSelector.message.id &&
            changedMessageSelector.message &&
            changedMessageSelector.message.Reacts
        ) {
            const changeIcon = changedMessageSelector.message.Reacts.find(
                (e: any) => e.userId === changedMessageSelector.userId,
            );
            setIcon(icons[changeIcon.action].actionIcon);
        }
    }, [changedMessageSelector.message]);

    useEffect(() => {
        if (
            reactsSelector.react &&
            reactsSelector.react.success &&
            parseInt(reactsSelector.react.messageId, 10) === messageId
        ) {
            setIcon(rootIcon);
        } else if (reactsSelector.react && parseInt(reactsSelector.react.messageId, 10) === messageId) {
            setIcon(icons[reactsSelector.react.action].icon);
            if (userSelector && userSelector.currentUser) {
                const socketEvents = setupSocketEvents && setupSocketEvents(userSelector.currentUser.id);
                socketEvents && socketEvents.sendChangedMessage(userSelector.currentUser.id, messageId.toString());
            }
        }
    }, [reactsSelector.react]);

    useEffect(() => {
        reacts &&
            reacts.forEach((e: any) => {
                if (e.userId === userId) {
                    setIcon(icons[e.action].actionIcon);
                }
            });
    }, [reacts]);

    return (
        <div className={cx('wrapper')}>
            <Tippy
                interactive
                delay={[0, 800]}
                offset={[120, 0]}
                hideOnClick={hideOnClick}
                placement="top-end"
                interactiveBorder={10}
                trigger="mouseenter focus"
                onClickOutside={() => {}}
                render={(attrs) => (
                    <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                        <div className={cx('icons')}>
                            {icons.map((item, index) => (
                                <div
                                    className={cx('icons-item')}
                                    key={index}
                                    onClick={() => {
                                        handleClickIcon && handleClickIcon(item.action);
                                    }}
                                >
                                    {item.icon}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            >
                <div className={cx('btn-handle-react', 'btn-handle')} onClick={onClick}>
                    <span className={cx('heart-icon', 'btn-icon', `bg-${type}`)}>{icon}</span>
                </div>
            </Tippy>
        </div>
    );
};

export default ReactsMessages;
