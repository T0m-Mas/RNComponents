import {MenuItem} from '../components/MainMenu';

export const MenuOptions: MenuItem[] = [
  {
    name: 'Animation One-O-One',
    icon: 'layers-outline',
    goto: 'Animation101Screen',
  },
  {
    name: 'Animation One-O-Two',
    icon: 'layers-outline',
    goto: 'Animation102Screen',
  },
  {
    name: 'Switches',
    icon: 'toggle',
    goto: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    goto: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'text-outline',
    goto: 'TextInputScreen',
  },
  {
    name: 'Pull to Refresh',
    icon: 'refresh-circle-outline',
    goto: 'PullToRefreshScreen',
  },
  {
    name: 'SectionList',
    icon: 'list-outline',
    goto: 'SectionListScreen',
  },
];
