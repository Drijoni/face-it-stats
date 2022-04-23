import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>  {'\u00A9'} CSELO 2022</Text>
        </View>
    )
}


const styles = StyleSheet.create({ 
    footer: {
        width:"100%",
        backgroundColor: '#252F3B',
        padding: 30,
        marginTop: 100,
        maxHeight:100,
        flex: 1,
        flexDirection:'column',
        justifyContent: 'flex-end',
        alignItems:'center',
    },

    footerText: {
        fontSize: 14,
        fontWeight:'bold',
        color:"#e6ede8",
    }
})

export default Footer;