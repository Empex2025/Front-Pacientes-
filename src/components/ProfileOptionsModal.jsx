import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Animated,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width: screenWidth } = Dimensions.get('window');

export const ProfileOptionsModal = ({
  visible,
  onClose,
  onAboutAccount,
  onReport,
  onBlockUser,
  username,
}) => {
  const options = [
    {
      id: 'about',
      title: 'Sobre esta Conta',
      icon: 'at',
      color: '#007AFF',
      onPress: onAboutAccount,
    },
    {
      id: 'report',
      title: 'Denunciar',
      icon: 'warning',
      color: '#8E8E93',
      onPress: onReport,
    },
    {
      id: 'block',
      title: 'Bloquear Usuário',
      icon: 'person-remove',
      color: '#FF3B30',
      onPress: onBlockUser,
    },
  ];

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={onClose}
        />
        
        <View style={styles.modalContainer}>
          <View style={styles.handle} />
          
          <View style={styles.content}>
            {options.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.optionItem,
                  { backgroundColor: option.color === '#007AFF' ? '#E3F2FD' : 
                                   option.color === '#FF3B30' ? '#FFEBEE' : '#F5F5F5' }
                ]}
                onPress={() => {
                  option.onPress();
                  onClose();
                }}
              >
                <View style={styles.optionContent}>
                  <Ionicons
                    name={option.icon}
                    size={24}
                    color={option.color}
                    style={styles.optionIcon}
                  />
                  <Text style={[styles.optionText, { color: option.color }]}>
                    {option.title}
                  </Text>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={option.color}
                    style={styles.chevronIcon}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 34, // Para o home indicator no iOS
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#D1D1D6',
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 8,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  optionItem: {
    borderRadius: 12,
    marginBottom: 8,
    overflow: 'hidden',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  optionIcon: {
    marginRight: 12,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  chevronIcon: {
    marginLeft: 8,
  },
});
