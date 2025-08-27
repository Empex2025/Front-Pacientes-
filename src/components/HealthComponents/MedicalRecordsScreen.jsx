import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  FlatList
} from 'react-native';
import { ArrowIcon } from './HealthIcons';
import { healthStyles } from './HealthStyles';

const MedicalRecordsScreen = ({ onNavigate }) => {
  // Dados mockados
  const medicalRecords = [
    {
      id: 1,
      date: '20/12/2024',
      description: 'Consulta com Dr. Ana Paula'
    },
    {
      id: 2,
      date: '15/12/2024',
      description: 'Exame de Sangue'
    }
  ];

  const renderRecord = ({ item }) => (
    <TouchableOpacity 
      style={healthStyles.recordItem}
      onPress={() => onNavigate('record-detail')}
    >
      <View style={healthStyles.recordInfo}>
        <Text style={healthStyles.recordDate}>{item.date}</Text>
        <Text style={healthStyles.recordDescription}>{item.description}</Text>
      </View>
      <ArrowIcon />
    </TouchableOpacity>
  );

  return (
    <View style={healthStyles.container}>
      <View style={healthStyles.header}>
        <TouchableOpacity onPress={() => onNavigate('home')}>
          <Text style={healthStyles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={healthStyles.headerTitle}>Prontuário</Text>
      </View>

      <FlatList
        data={medicalRecords}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderRecord}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MedicalRecordsScreen;
