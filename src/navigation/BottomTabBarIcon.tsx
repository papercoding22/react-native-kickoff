import React from 'react';

import Bell from '@/assets/icons/bell.svg';
import House from '@/assets/icons/house-floor.svg';
import User from '@/assets/icons/user-alt.svg';
import {useRoute} from '@react-navigation/native';

const BottomTabBarIcon = ({
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => {
  const route = useRoute();

  switch (route.name) {
    case 'Home':
      return <House width={size} height={size} color={color} />;
    case 'Notifications':
      return <Bell width={size} height={size} color={color} />;
    case 'Settings':
      return <User width={size} height={size} color={color} />;
    default:
      return null;
  }
};

export default BottomTabBarIcon;
