const guestPages = ['/dashboard', '/bookings', '/sell-car'];

const navLinks = [
  {
    link: '/dashboard',
    icon: 'ri-apps-2-line',
    title: 'Dashboard',
  },
  {
    link: '/bookings',
    icon: 'ri-taxi-line',
    title: 'Booking',
  },
  {
    link: '/sell-car',
    icon: 'ri-shopping-bag-line',
    title: 'Sell Cars',
  },
];

export const accountLinks = [
  {
    link: '/settings',
    icon: 'ri-settings-2-line',
    title: 'Settings',
  },
  {
    link: '/profile',
    icon: 'ri-profile-line',
    title: 'Profile',
  },
];

export const guestNavLinks = navLinks.filter((item) =>
  guestPages.includes(item.link)
);

export default navLinks;
