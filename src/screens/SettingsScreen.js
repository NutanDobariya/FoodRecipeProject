import React from 'react';
import {  Text, View, SafeAreaView} from 'react-native';
export default function SettingsScreen(props) {

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems:'center',
            justifyContent:'center'
          }}
        >
           <Text>Settings</Text>
          </View>
      </SafeAreaView>
    </View>
  );
}
