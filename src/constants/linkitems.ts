import { StaticImageData } from "next/image";
import { linkImgs } from "./linkimages";

interface ILinkItems {
    title: string;
    path: string;
    icon: StaticImageData;
    active_icon: StaticImageData;
}

export const linkitems: ILinkItems[] = [
    {
        path: '/dashboard',
        icon: linkImgs.dashboardIcon,
        active_icon: linkImgs.activedashboardIcon,
        title: 'Dashboard'
    },
    {
        path: '/dashboard/service',
        icon: linkImgs.serviceIcon,
        active_icon: linkImgs.activeServiceIcon,
        title: 'My Service'
    },
    {
        path: '/dashboard/booking',
        icon: linkImgs.bookingIcon,
        active_icon: linkImgs.activeBookingIcon,
        title: 'Bookings'
    },
    {
        path: '/dashboard/transaction',
        icon: linkImgs.transactionIcon,
        active_icon: linkImgs.activeTransactionIcon,
        title: 'Transactions'
    },
    {
        path: '/dashboard/chat',
        icon: linkImgs.chatIcon,
        active_icon: linkImgs.activeChatIcon,
        title: 'Chats'
    },
    {
        path: '/dashboard/setting',
        icon: linkImgs.settingIcon,
        active_icon: linkImgs.activeSettingIcon,
        title: 'Settings'
    },
]