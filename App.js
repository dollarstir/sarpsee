import React ,{useState}from 'react';
import { StyleSheet, Text, View,ActivityIndicator,SafeAreaView,StatusBar,Modal ,Image} from 'react-native';
import {WebView} from 'react-native-webview';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import AnimatedLoader from 'react-native-animated-loader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();


export default function App() {
  const mypic = require ('./assets/load.gif');

  const [isvisible,setIsvisible] = useState(false);
  const showsping = ()=>{
    setIsvisible(true);
  }

  const hideSpin=()=>{
    setIsvisible(false);
  }

  function ActivityIndicatorLoadingView() {
    //making a view to show to while loading the webpage
    return (
      <ActivityIndicator
         color="#009688"
         size="large"
         style={styles.ActivityIndicatorStyle}
      />
    );
 }
  return (
    <>
    <StatusBar barStyle='dark-content' />
    
  <SafeAreaView  style={{flex:1}}>
  <Modal visible={isvisible} transparent={true} style={{backgroundColor:'rgba(255,255,255,0.5'}}>
     <View style={ {flex:1,alignItems: 'center',justifyContent:'center'}} > 
        <Image source={mypic}  style={{width:100,height:100}} />
     </View>
      </Modal>
   

    <WebView source={{ uri: 'https://sarpsee.com/' }}
    startInLoadingState={true}
    javaScriptEnabled={true}
    domStorageEnabled={true}
    onLoadStart={showsping}
    onLoad={hideSpin}
   
    renderLoading={
      showsping
      
    //   ()=>(
    //   <ActivityIndicator 
    //   color='black'
    //   size='large'

    //   style={{flex:1}}
      
    //   />
    // )

    }
    />
   
</SafeAreaView>
</>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
