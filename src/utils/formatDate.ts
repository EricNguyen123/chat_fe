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

export function formatMessageTime(dateString: string): string {
    const date = moment(dateString);
    const now = moment();

    if (date.isSame(now, 'day')) {
        return date.format('HH:mm');
    } else {
        return date.format('dddd HH:mm');
    }
}

export function hasDateChanged(prevTimestamp: string, currentTimestamp: string): boolean {
    const prevDate = moment(prevTimestamp).startOf('day');
    const currentDate = moment(currentTimestamp).startOf('day');
    return !prevDate.isSame(currentDate);
}

export function formatDateTime(dateString: string): string {
    const date = moment(dateString);
    return date.format('HH:mm DD [Month] MM, YYYY');
}

export const formatRelativeTime = (dateString: string): string => {
    const now = moment();
    const inputDate = moment(dateString);

    const duration = moment.duration(now.diff(inputDate));
    const seconds = duration.asSeconds();
    const minutes = duration.asMinutes();
    const hours = duration.asHours();
    const days = duration.asDays();
    const months = duration.asMonths();
    const years = duration.asYears();

    if (seconds < 60) {
        return `${Math.floor(seconds)} seconds ago`;
    } else if (minutes < 60) {
        return `${Math.floor(minutes)} minute ago`;
    } else if (hours < 24) {
        return `${Math.floor(hours)} hours ago`;
    } else if (days < 30) {
        return `${Math.floor(days)} days ago`;
    } else if (months < 12) {
        return `${Math.floor(months)} last month`;
    } else {
        return `${Math.floor(years)} last year`;
    }
};
