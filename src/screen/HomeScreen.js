import {Button} from '@rneui/themed';
import React, {useContext} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';
import {Colors} from '../constants/colors';
import {ThemeContext} from '../context/ThemeContext';

const HomeScreen = ({navigation}) => {
  const {dynamicColors, changeColors} = useContext(ThemeContext);
  const changeTheme = index => {
    changeColors(Colors[index]);
  };

  const renderItem = ({item, index}) => {
    return (
      <>
        <View style={styles.itemView}>
          <Button
            onPress={() => changeTheme(index)}
            title={'Theme ' + (index + 1)}
            color={Colors[index].PRIMARY_COLOR}
          />
        </View>
      </>
    );
  };
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: dynamicColors.PAGE_BACKGROUND_COLOR},
      ]}>
      <FlatList
        scrollEnabled={true}
        data={Colors}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={(data, index) => renderItem(data, index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  bodyContainer: {
    padding: 10,
  },
  itemView: {marginTop: 5},
});

export default HomeScreen;
