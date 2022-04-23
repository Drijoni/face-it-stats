import react from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TopPlayers } from '../components/TopPlayers';

const BestPlayers = () => {
    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <Text style={styles.title}>BEST CSGO PLAYERS</Text>
                <TopPlayers />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        backgroundColor: '#21242D',
        paddingTop: 20,
        padding: 20,
    },


    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 30,
        marginBottom: 30,
        paddingBottom: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#ababab',
    }



})

export default BestPlayers;