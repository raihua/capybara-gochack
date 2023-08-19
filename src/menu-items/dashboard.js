// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'EV Predict',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'dashboard2',
      title: 'Energy Consumuption',
      type: 'item',
      url: '/dashboard/energyConsumption',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'dashboard3',
      title: 'Population',
      type: 'item',
      url: '/dashboard/population',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'dashboard4',
      title: 'GDP',
      type: 'item',
      url: '/dashboard/gdp',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'dashboard5',
      title: 'Solar',
      type: 'item',
      url: '/dashboard/solar',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
