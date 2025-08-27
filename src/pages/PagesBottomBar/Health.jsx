import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from "../../components/Header";
import HomeScreen from '../../components/HealthComponents/HomeScreen';
import DoctorsScreen from '../../components/HealthComponents/DoctorsScreen';
import AppointmentQuestion from '../../components/HealthComponents/AppointmentQuestion';
import AppointmentDetails from '../../components/HealthComponents/AppointmentDetails';
import CalendarScreen from '../../components/HealthComponents/CalendarScreen';
import AppointmentConfirmed from '../../components/HealthComponents/AppointmentConfirmed';
import AppointmentsScreen from '../../components/HealthComponents/AppointmentsScreen';
import MedicalRecordsScreen from '../../components/HealthComponents/MedicalRecordsScreen';
import PlaceholderScreen from '../../components/HealthComponents/PlaceholderScreen';

export const Health = () => {
  const navigation = useNavigation();
  const [currentScreen, setCurrentScreen] = useState('home');

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'doctors':
        return <DoctorsScreen onNavigate={setCurrentScreen} />;
      case 'appointment-question':
        return <AppointmentQuestion onNavigate={setCurrentScreen} />;
      case 'appointment-details':
        return <AppointmentDetails onNavigate={setCurrentScreen} />;
      case 'calendar':
        return <CalendarScreen onNavigate={setCurrentScreen} />;
      case 'appointment-confirmed':
        return <AppointmentConfirmed onNavigate={setCurrentScreen} />;
      case 'appointments':
        return <AppointmentsScreen onNavigate={setCurrentScreen} />;
      case 'records':
        return <MedicalRecordsScreen onNavigate={setCurrentScreen} />;
      case 'health-info':
        return <PlaceholderScreen 
          onNavigate={setCurrentScreen} 
          title="Informações de Saúde" 
          description="Aqui você encontrará suas informações de saúde e histórico médico."
        />;
      case 'exam-results':
        return <PlaceholderScreen 
          onNavigate={setCurrentScreen} 
          title="Resultados de Exames" 
          description="Visualize e gerencie seus resultados de exames laboratoriais."
        />;
      case 'exams':
        return <PlaceholderScreen 
          onNavigate={setCurrentScreen} 
          title="Exames" 
          description="Agende e acompanhe seus exames médicos."
        />;
      case 'caregivers':
        return <PlaceholderScreen 
          onNavigate={setCurrentScreen} 
          title="Cuidadores" 
          description="Encontre e contrate cuidadores profissionais."
        />;
      default:
        return <HomeScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {renderCurrentScreen()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});