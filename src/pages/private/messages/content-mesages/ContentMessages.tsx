import classNames from 'classnames/bind';
import styles from './ContentMessages.module.scss';
import ItemMessages from './item-messages';

const cx = classNames.bind(styles);

interface Props {
    data: any;
}
const ContentMessages: React.FC<Props> = ({ data }) => {
    return (
        <div className={cx('wrapper')}>
            <ItemMessages data={data.messages} />
        </div>
    );
};

export default ContentMessages;
