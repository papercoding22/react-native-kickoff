// Create a React component to show user name

import React from 'react';
import {Text} from 'react-native';

import {useTranslation} from 'react-i18next';
import {Section} from '@/components';
import {useAppServices} from '@/providers';
import {useQuery} from '@tanstack/react-query';

export default function UserProfile() {
  const {t} = useTranslation(['example']);
  const {userService} = useAppServices();

  // Random currentId from 1 - 99
  const currentId = Math.floor(Math.random() * 10) + 1;

  const {data} = useQuery({
    queryKey: ['example', currentId],
    queryFn: () => {
      return userService.fetchOne(currentId);
    },
    enabled: currentId >= 0,
  });

  return (
    <Section title="Author">
      <Text>
        {t('example:helloUser', {
          name: data?.name || '...',
        })}
      </Text>
    </Section>
  );
}
