import moment from 'moment';

export const formatDate = (isoString: string): string => {
    const date = moment(isoString);
    const now = moment();

    const diffDays = now.diff(date, 'days');
    const diffHours = now.diff(date, 'hours');
    const diffMinutes = now.diff(date, 'minutes');

    if (diffDays >= 2) {
        return date.format('DD/MM/YYYY');
    } else if (diffDays >= 1) {
        return `Posted ${diffDays} days ago.`;
    } else if (diffHours >= 1) {
        return `Posted ${diffHours} hours ago.`;
    } else if (diffMinutes >= 1) {
        return `Posted ${diffMinutes} minutes ago.`;
    } else {
        return 'Just posted.';
    }
};
