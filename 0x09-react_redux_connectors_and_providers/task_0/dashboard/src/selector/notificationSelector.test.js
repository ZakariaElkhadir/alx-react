import { getUnreadNotifications } from './notificationSelector';

describe('notificationSelector', () => {
    const notifications = [
        { id: 1, isRead: false, message: 'Notification 1' },
        { id: 2, isRead: true, message: 'Notification 2' },
        { id: 3, isRead: false, message: 'Notification 3' },
    ];

    it('should return only unread notifications', () => {
        const unreadNotifications = getUnreadNotifications(notifications);
        expect(unreadNotifications).toEqual([
            { id: 1, isRead: false, message: 'Notification 1' },
            { id: 3, isRead: false, message: 'Notification 3' },
        ]);
    });

    it('should return an empty array if all notifications are read', () => {
        const allReadNotifications = notifications.map(notification => ({
            ...notification,
            isRead: true,
        }));
        const unreadNotifications = getUnreadNotifications(allReadNotifications);
        expect(unreadNotifications).toEqual([]);
    });

    it('should return all notifications if none are read', () => {
        const allUnreadNotifications = notifications.map(notification => ({
            ...notification,
            isRead: false,
        }));
        const unreadNotifications = getUnreadNotifications(allUnreadNotifications);
        expect(unreadNotifications).toEqual(allUnreadNotifications);
    });

    it('should return an empty array if there are no notifications', () => {
        const unreadNotifications = getUnreadNotifications([]);
        expect(unreadNotifications).toEqual([]);
    });
});