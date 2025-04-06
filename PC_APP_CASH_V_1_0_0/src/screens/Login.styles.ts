import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      justifyContent: 'flex-start',
      backgroundColor: '#f2f2f2',
    },
    logo: {
      width: 120,
      height: 120,
      alignSelf: 'center',
      marginBottom: 16,
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 30,
      color: 'blue',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 20,
      elevation: 4,
    },
    inputRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    label: {
      width: 80,
      fontSize: 16,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 6,
      padding: 8,
    },
    buttonWrapper: {
      marginTop: 16,
    },
  });

  export default styles;