import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';

export const BlockConfirmationModal = ({
  visible,
  onClose,
  onConfirmBlock,
  username,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.handle} />
          
          <View style={styles.content}>
            <Text style={styles.title}>
              Você tem certeza que deseja bloquear @{username}?
            </Text>
            
            <Text style={styles.description}>
              O usuário não poderá ver suas publicações e flashs, nem aparecerá em suas buscas.
            </Text>
            
            <Text style={styles.description}>
              É possível desfazer essa alteração em{' '}
              <Text style={styles.highlight}>Opções > Bloqueados</Text>
            </Text>
            
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={() => {
                  onConfirmBlock();
                  onClose();
                }}
              >
                <Text style={styles.confirmButtonText}>Sim, Bloquear</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={onClose}
              >
                <Text style={styles.cancelButtonText}>Voltar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '85%',
    maxWidth: 400,
    paddingBottom: 20,
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
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C1C1E',
    textAlign: 'left',
    marginBottom: 16,
    lineHeight: 24,
  },
  description: {
    fontSize: 14,
    color: '#8E8E93',
    textAlign: 'left',
    marginBottom: 12,
    lineHeight: 20,
  },
  highlight: {
    color: '#1C1C1E',
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 24,
  },
  confirmButton: {
    backgroundColor: '#FF6B6B',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginBottom: 12,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  cancelButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF6B6B',
  },
  cancelButtonText: {
    color: '#FF6B6B',
    fontSize: 16,
    fontWeight: '600',
  },
});
