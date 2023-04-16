import react, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';


const TopTeams = () => {


    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch('https://hltv-api.vercel.app/api/player.json')
            response = await response.json()
            setData(response)
        }
        fetchMyAPI()
    }, [])


    console.log(data);



    return (

   

            <FlatList
                data={data}
                renderItem={({ item }) => (

                    <Collapse style={styles.collapse}>
                    <CollapseHeader>
                        <View style={styles.threeTeams}>
                            <Text style={styles.teamRank}>#{item.ranking}</Text>
                            <Image source={{ uri: item.logo }} style={styles.imgHome} />
                            <Text style={styles.teamName}>{item.name}</Text>
                        </View>
                    </CollapseHeader>

                    <CollapseBody style={styles.collapseBody}>
                        <View style={styles.playersContainer}>{item.players.map(players =>
                            <View>
                                <Image source={{ uri: players.image }} style={styles.imgPlayers} />
                                <Text style={styles.nickname}>{players.nickname}</Text>
                            </View>
                        )}</View>
                    </CollapseBody>

                </Collapse>
                )} />

     




    )
}



const TopThreeTeams = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch('https://hltv-api.vercel.app/api/player.json')
            response = await response.json()
            setData(response.slice(0, 3))
        }
        fetchMyAPI()
    }, [])





    // solution might be to async the fetch option
    // ps it was just a simple slice functinon



    /*


*/


    //console.log(data)

    return (

        <FlatList
            data={data}
            renderItem={({ item }) => (

                <Collapse style={styles.collapse}>
                    <CollapseHeader>
                        <View style={styles.threeTeams}>
                            <Text style={styles.teamRank}>#{item.ranking}</Text>
                            <Image source={{ uri: item.logo }} style={styles.imgHome} />
                            <Text style={styles.teamName}>{item.name}</Text>
                        </View>
                    </CollapseHeader>

                    <CollapseBody style={styles.collapseBody}>
                        <View style={styles.playersContainer}>{item.players.map(players =>
                            <View>
                                <Image source={{ uri: players.image }} style={styles.imgPlayers} />
                                <Text style={styles.nickname}>{players.nickname}</Text>
                            </View>
                        )}</View>
                    </CollapseBody>

                </Collapse>

            )} />

    )

}


const styles = StyleSheet.create({
    /* Style for top 3*/ 
    threeTeams: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#252F3B",
        justifyContent: 'flex-start',
        paddingLeft: 10,
        padding:5,
    },

    imgHome: {
        width: 30,
        height: 30,
        borderRadius: 8,
        resizeMode: "cover",
    },

    playersContainer: {
        backgroundColor: '#2D3844',
        padding: 10,
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-around',
        textAlign:'center',
    },

    collapse: {
        marginBottom: 10,
    },

    teamName: {
        color: '#929a9e',
        paddingLeft: 10,
        fontSize: 16,
        padding:10, 
    },

    teamRank: {
        color: '#889095',
        fontSize: 18,
        fontWeight: 'bold',
        paddingRight:10,
    },

    imgPlayers: {
        width: 60,
        height: 60,
        borderRadius:5,
        resizeMode: "cover",
    },

    nickname: {
        color:'#929a9e',
    }

    

})

export { TopTeams, TopThreeTeams };