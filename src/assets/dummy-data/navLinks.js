const navLinks = [
  {
    path: '/dashboard',
    icon: 'ri-apps-2-line',
    display: 'Dashboard',
  },
  {
    path: '/bookings',
    icon: 'ri-taxi-line',
    display: 'Booking',
  },
  {
    path: '/sell-car',
    icon: 'ri-shopping-bag-line',
    display: 'Sell Cars',
  },
  {
    path: '/settings',
    icon: 'ri-settings-2-line',
    display: 'Settings',
  },
];

const guestPages = ['/dashboard', '/bookings', '/sell-car'];

export const guestNavLinks = navLinks.filter((item) => guestPages.includes(item.path));

export default navLinks;
