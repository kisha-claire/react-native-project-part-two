import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";


const ContactUs = (props) => {
    console.log(props);
    const handleEmailPress = () => {
      Linking.openURL('mailto:kishaclaire04@gmail.com');
    };
  
    const handlePhonePress = () => {
      Linking.openURL('tel:+25073036692');
    };
  
    const handleLocationPress = () => {
      Linking.openURL('https://www.google.com/maps?q=Rwanda,+Kigali,+Kacyiru');
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Contact Information</Text>
  
        <TouchableOpacity style={styles.row} onPress={handleEmailPress}>
          <Ionicons name="mail" size={24} color="blue" />
          <Text style={styles.label}>kishaclaire04@gmail.com</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.row} onPress={handlePhonePress}>
          <Ionicons name="call" size={24} color="blue" />
          <Text style={styles.label}>+25073036692</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.row} onPress={handleLocationPress}>
          <Ionicons name="location" size={24} color="blue" />
          <Text style={styles.label}>Rwanda, Kigali, Kacyiru</Text>
        </TouchableOpacity>
        <Button title='Calculator' onPress={()=> props.navigation.navigate('Calculator')}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#333',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    label: {
      fontSize: 18,
      marginLeft: 10,
      color: 'blue', // You can change the color to your preference
      textDecorationLine: 'underline',
    },
  });
  
  export default ContactUs;