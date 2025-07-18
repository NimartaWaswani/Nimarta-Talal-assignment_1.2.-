import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList, ProfileItem } from './types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [apiData, setApiData] = useState<ProfileItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dummyUsers: ProfileItem[] = Array.from({ length: 20 }, (_, i) => ({
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      number: `98765432${i < 10 ? '0' + i : i}`,
    }));
    setApiData(dummyUsers);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={apiData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>Name: {item.name}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Phone: {item.number}</Text>
            <View style={styles.button}>
              <Button
                title="View Profile"
                onPress={() => navigation.navigate('DetailScreen', { user: item })}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
  backgroundColor: '#ffffff',
  borderRadius: 12,
  padding: 18,
  marginVertical: 10,
  marginHorizontal: 12,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 4, // for Android
  borderLeftWidth: 5,
  borderLeftColor: '#4A90E2', // subtle accent
},
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    marginTop: 10,
  },
});

export default HomeScreen;
