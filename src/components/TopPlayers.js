import react, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';

const TopPlayers = () => {
    
    const navigation = useNavigation();

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch('https://hltv-api.vercel.app/api/players.json')
            response = await response.json()
            setData(response)
        }
        fetchMyAPI()
    }, [])


    //console.log(data);
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    
                    <TouchableOpacity onPress={() => navigation.navigate('Stats', {
                        paramNick: item['nickname']
                    })}
                
                       
                >
                        <Text style={styles.topThreePlayers}>{item.nickname}</Text>
                        </TouchableOpacity>
                )}

            />
        </View>
    )
}


/* Return only three players for home screen */
const TopThreePlayers = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch('https://hltv-api.vercel.app/api/players.json')
            response = await response.json()
            setData(response.slice(0, 3))
        }
        fetchMyAPI()
    }, [])


    //console.log(data);

    return (

        <FlatList
            numColumns={3}
            data={data}
            renderItem={({ item }) => (

                <Collapse style={styles.collapse}>
                    <CollapseHeader>
                        <View >
                            <Text style={styles.topThreePlayers}>{item.nickname}</Text>
                        </View>
                    </CollapseHeader>

                    <CollapseBody style={styles.collapseBody}>
                        <Text style={styles.playerStats}>KD: {item.kd}</Text>
                        <Text style={styles.playerStats}>Rating: {item.rating}</Text>
                        <Text style={styles.playerStats}>Maps Played: {item.mapsPlayed}</Text>
                    </CollapseBody>

                </Collapse>

            )} />

    )
}


const styles = StyleSheet.create({

    collapse: {
        flex: 1,
        justifyContent: 'space-between',
    },

    topThreePlayers: {
        flex: 1,
        backgroundColor: "#252F3B",
        margin: 5,
        padding: 10,
        textAlign: 'center',
        color: '#929a9e',

    },

    collapseBody: {
        textAlign: 'center',
        backgroundColor: '#2D3844',
        margin: 5,
        padding: 10,
    },

    playerStats: {
        color: '#929a9e',
        fontWeight: 'bold',
    }
})


export { TopPlayers, TopThreePlayers };