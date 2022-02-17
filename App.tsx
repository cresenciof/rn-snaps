import React from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const SCREEN_WIDTH = Dimensions.get('window').width;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        contentContainerStyle={styles.contentContainer}
        renderItem={({item}) => (
          <View style={styles.cardContainer}>
            <View style={styles.cardContent}>
              <Text style={styles.text}>{item}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.toString()}
        horizontal
        // snap to interval, show center item and scroll to center
        snapToInterval={SCREEN_WIDTH * 0.9 + 5}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    alignSelf: 'center',
  },
  cardContainer: {
    width: SCREEN_WIDTH * 0.9,
    backgroundColor: '#1572A1',
    borderRadius: 12,
    height: 500,
    marginHorizontal: 5,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;
