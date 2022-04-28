import React, {useContext} from 'react';
import {UserContext} from '../../contexts/UserContext';

import {TabArea, TabItem, TabItemCenter, TabImageProfile} from './styles';

import HomeIcon from '../../assets/home.svg';
import SearchIcon from '../../assets/search.svg';
import TodayIcon from '../../assets/today.svg';
import FavoriteIcon from '../../assets/favorite.svg';
import AccountIcon from '../../assets/account.svg';

export function CustomTabBar({state, navigation}) {
  const {state: user} = useContext(UserContext);

  const goTo = screenName => {
    console.log(state);
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem
        onPress={() => {
          goTo('Home');
        }}>
        <HomeIcon
          style={{opacity: state.index === 0 ? 1 : 0.5}}
          width={24}
          height={24}
          fill="grey"
        />
      </TabItem>
      <TabItem
        onPress={() => {
          goTo('Search');
        }}>
        <SearchIcon
          style={{opacity: state.index === 1 ? 1 : 0.5}}
          width={24}
          height={24}
          fill="grey"
        />
      </TabItem>
      <TabItemCenter
        onPress={() => {
          goTo('Appointments');
        }}>
        <TodayIcon style={{opacity: 1}} width={32} height={32} fill="grey" />
      </TabItemCenter>
      <TabItem
        onPress={() => {
          goTo('Favorites');
        }}>
        <FavoriteIcon
          style={{opacity: state.index === 3 ? 1 : 0.5}}
          width={24}
          height={24}
          fill="grey"
        />
      </TabItem>
      <TabItem
        onPress={() => {
          goTo('Profile');
        }}>
        {user.avatar !== '' ? (
          <TabImageProfile
            opacity={state.index === 4 ? true : false}
            source={{uri: user.avatar}}
          />
        ) : (
          <AccountIcon
            style={{opacity: state.index === 4 ? 1 : 0.5}}
            width={24}
            height={24}
            fill="grey"
          />
        )}
      </TabItem>
    </TabArea>
  );
}
