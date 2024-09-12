export function getFullYear(){
    return new Date().getFullYear();
}
export function getFooterCopy(isIndex) {
    if (isIndex) {
        return 'Holberton school';
    } else {
        return 'Holberton School main dashboard';
    }
}
export const getLatestNotification = () =>
	'<strong>Urgent Requirement</strong> - complete by EOD';