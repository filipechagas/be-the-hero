import React from 'react';
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';
import { useNavigation } from '@react-navigation/native';
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Detail(){
  const navigation = useNavigation();
  const message = 'Olá XXX, estou entrando em contato pois gostaria de ajudar no caso "XXX" com o valor de R$ 120,00.'

  function navigateBack(){
    navigation.goBack();
  }

  function sendMail(){
    MailComposer.composeAsync({
      subject: "Herói do caso: XXX",
      recipients: ['contact@example.com'],
      body: message,
    });
  }

  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=5514982231902&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity 
          onPress={navigateBack}
        > 
          <Feather name="arrow-left" size={28} color="#E02041"/>
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[ styles.incidentProperty, { marginTop: 0 } ]}>ONG:</Text>
        <Text style={styles.incidentValue}>XXX</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>Lorem ipsum dolor</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>R$ 120,00</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity 
            style={styles.action} 
            onPress={sendWhatsapp}
          > 
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.action} 
            onPress={sendMail}
          > 
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
} 
