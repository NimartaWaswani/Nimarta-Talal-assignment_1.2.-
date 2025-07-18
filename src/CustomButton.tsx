import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const CustomButton = (props: any) => {
  return (
    <TouchableOpacity
      style={{
        height: 45,
        backgroundColor: 'red',
        borderRadius: 10,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
      }}
      onPress={props.onPressFunc}
    >
      <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
