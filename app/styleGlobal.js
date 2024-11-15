// globalStyles.js
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
      },
      container: {
        marginTop: 30,
        borderRadius: 29,
        paddingVertical: '10%',
        padding: '5%',
        marginHorizontal: '3%',
        marginBottom: '0%'
      },
      containerCollapse:{
        borderRadius: 29,
        padding: '2%',
        marginHorizontal: '3%',
      },
      title1: {
        fontSize: 20,
        fontWeight: '900',
        color: '#f0f0f0',
        padding: 10,
        textAlign: 'center',
        borderBottomRightRadius: 60,
      },
      subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
        marginTop: 20,
      },
      border: {
        borderWidth: 2,
        marginBottom: 10,
        marginRight: 60,
        borderColor: 'rgba(10, 150, 0, 0.5)',
      },
});
