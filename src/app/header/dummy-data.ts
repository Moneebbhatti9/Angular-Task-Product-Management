interface langObject {
  language: string;
  flag: string;
}

interface notificationObject {
  icon: string;
  subject: string;
  description: string;
}

interface userObject {
  icon: string;
  label: string;
}

export const Languages: Array<langObject> = [
  {
    language: 'English',
    flag: 'us',
  },
  {
    language: 'French',
    flag: 'france',
  },
  {
    language: 'German',
    flag: 'germany',
  },
  {
    language: 'Russian',
    flag: 'russia',
  },
  {
    language: 'Spanish',
    flag: 'spain',
  },
];

export const notifications: Array<notificationObject> = [
  {
    icon: 'far fa-cloud-download',
    subject: 'Downloading',
    description: 'lorem ipsum dolor sit amet, consectetur adipis',
  },
  {
    icon: 'far fa-cloud-upload',
    subject: 'Upload Complete',
    description: 'lorem ipsum dolor sit amet, consectetur adipis',
  },
  {
    icon: 'far fa-trash',
    subject: '350 MB trash files',
    description: 'lorem ipsum dolor sit amet, consectetur adipis',
  },
];

export const userItems: Array<userObject> = [
  {
    icon: 'far fa-user',
    label: 'Profile',
  },
  {
    icon: 'far fa-cog',
    label: 'Settings',
  },
  {
    icon: 'far fa-unlock-alt',
    label: 'Lock screen',
  },
  {
    icon: 'far fa-power-off',
    label: 'Logout',
  },
];
