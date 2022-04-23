import React, { ImageBackground } from 'react-native';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from "react";
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { Button } from 'react-native-web';





const CheckStats = ({ nick }) => {


    // For main info
    const [data, setData] = useState([])
    const [csgoData, setCsgoData] = useState([])
    const [playerId, setPlayerId] = useState([])

    // For player info
    const [playerData, setPlayerData] = useState([])
    const [playerMapData, setPlayerMapData] = useState([])

    //For latest matches
    const [gameHistory, setGameHistory] = useState([]);


    useEffect(() => {

        const API = `https://open.faceit.com/data/v4/players?nickname=` + nick + `&game=csgo`;

        async function fetchMyAPI() {

            let response = await fetch(API, {
                headers: {
                    accept: 'application/json',
                    Authorization: "Bearer cfcd2536-9ea4-4919-9db0-b9dd9cf870cb",
                }
            })

            response = await response.json()
            setData(response)
            setCsgoData(response.games.csgo);
            setPlayerId(response.player_id)



        }

        fetchMyAPI()

        fetchMyAPI().catch(() => {
            alert("Enter a name please!"),
                location.reload();

        }) // catch error


    }, [nick])


    useEffect(() => {
        async function fetchGameApi() {
            const gameApi = `https://open.faceit.com/data/v4/players/${playerId}/stats/csgo`;
            let gameResponse = await fetch(gameApi, {
                headers: {
                    accept: 'application/json',
                    Authorization: "Bearer cfcd2536-9ea4-4919-9db0-b9dd9cf870cb",
                }
            })

            gameResponse = await gameResponse.json()
            setPlayerData(gameResponse.lifetime)
            setPlayerMapData(gameResponse.segments)
        }

        if (playerId != "") {
            fetchGameApi()
        }
        else {
            console.log("wait...")
        }

    }, [playerId])


    useEffect(() => {
        async function fetchGameHistory() {
            const apiHistory = `https://open.faceit.com/data/v4/players/${playerId}/history?game=csgo&offset=0&limit=5`;
            let historyResponse = await fetch(apiHistory, {
                headers: {
                    accept: 'application/json',
                    Authorization: "Bearer cfcd2536-9ea4-4919-9db0-b9dd9cf870cb",
                }
            })

            historyResponse = await historyResponse.json()
            setGameHistory(historyResponse.items)

        }

        if (playerId != "") {
            fetchGameHistory()
        }
        else {
            console.log("wait...")
        }

    }, [playerId])




    //For recent results
    var wins = [];
    var winsReverse = []
    var recentWins = playerData["Recent Results"]?.map((x) => {
        if (x == 0) {
            wins.push("L")
            winsReverse.unshift("L")
        } else {
            wins.push("W")
            winsReverse.unshift("W")

        }
    });

    console.log(gameHistory)

    var dumbArr = [0, 1, 2, 3, 4];

    return (
        <View style={styles.mainContainer}>
            <ScrollView>
                <View style={styles.allinfoContainer}>
                    <ImageBackground source={data.cover_image} resizeMode="cover" style={styles.backgroundImage}>
                        <View style={styles.firstInfoContainer}>
                            <View style={styles.imageContainer}>
                                <Image source={{ uri: data.avatar }} style={styles.imgPlayers} />
                            </View>

                            <View style={styles.infoContainer}>
                                <Text style={styles.text}><Text style={styles.nameText}>{data.nickname}</Text></Text>
                                <Text style={styles.text}>Region: <Text style={styles.responseText}>{csgoData.region} </Text></Text>
                                <Text style={styles.text}>Skill Level: <Text style={styles.responseText}>{csgoData.skill_level} </Text></Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.mainStatsContainer}>
                    <Text style={styles.sectionTitle}> Lifetime stats </Text>
                    <View style={styles.mainStats}>
                        <View>
                            <Text style={styles.text}>Elo: <Text style={styles.responseText}>{csgoData.faceit_elo} </Text></Text>
                            <Text style={styles.text}>K/D: <Text style={styles.responseText}>{playerData["Average K/D Ratio"]}</Text> </Text>
                            <Text style={styles.text}>HS Rate:<Text style={styles.responseText}>{playerData["Average Headshots %"]}%</Text> </Text>
                        </View>
                        <View>
                            <Text style={styles.text}>Matches: <Text style={styles.responseText}> {playerData["Matches"]}</Text> </Text>
                            <Text style={styles.text}>Wins: <Text style={styles.responseText}>{playerData["Wins"]}</Text> </Text>
                            <Text style={{ fontSize: 14, color: '#d4d4d4' }}>Longest Win Streak: <Text style={styles.responseText}>{playerData["Longest Win Streak"]}</Text> </Text>
                        </View>
                    </View>
                </View>


                <View style={styles.recentResultSection}>
                    <Text style={styles.sectionTitle}> Recent Results</Text>
                    <View style={styles.recentWinsContainer}>
                        <FlatList
                            numColumns={5}
                            data={wins}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => {

                                if (item == "L") {
                                    return (
                                        <Text style={styles.recentL}>L</Text>
                                    )

                                }
                                else {
                                    return (
                                        <Text style={styles.recentW}>W</Text>
                                    )
                                }
                            }
                            }
                        />
                    </View>
                </View>


                <View style={styles.latestMatchesSection}>
                    <Text style={styles.sectionTitle}>Recent Matches</Text>
                    <FlatList
                        data={dumbArr}
                        renderItem={({ item }) => {

                            return (
                                <View style={styles.matchCollapse}>

                                    <View style={styles.matchHeader}>
                                        <View style={styles.headerContainer}>
                                            <Image source={{ uri: gameHistory[item]?.teams?.faction1?.avatar }} style={styles.imgMatch} />
                                            <Text style={styles.matchTeam}>{gameHistory[item]?.teams?.faction1?.nickname}</Text>
                                        </View>
                                        <View style= {{alignContent:'center', alignItems:'center'}}>
                                            <View style={styles.headerContainerCol}>
                                                <Text style={styles.matchResult}>{gameHistory[item]?.results?.score?.faction1}</Text>
                                                <Text style={styles.matchResult}>-</Text>
                                                <Text style={styles.matchResult}>{gameHistory[item]?.results?.score?.faction2}</Text>
                                            </View>
                                            <View>
                                                <FlatList
                                                    data={winsReverse[item]}
                                                    renderItem={({ item }) => {

                                                        if (item == "L") {
                                                            return (<Text style={{ color: 'red', fontWeight: 'bold', padding: 10 }}>Lost</Text>)
                                                        }
                                                        else {
                                                            return (<Text style={{ color: 'green', fontWeight: 'bold', padding: 10 }}>Won</Text>)
                                                        }
                                                    }} />
                                            </View>
                                        </View>
                                        <View style={styles.headerContainer}>
                                            <Image source={{ uri: gameHistory[item]?.teams?.faction2?.avatar }} style={styles.imgMatch} />
                                            <Text style={styles.matchTeam}>{gameHistory[item]?.teams?.faction2?.nickname}</Text>
                                        </View>
                                    </View>

                                </View>

                            )
                        }}

                    />
                </View>

                <View style={styles.playerMapSection}>
                    <Text style={styles.sectionTitle}>Statistics for maps</Text>
                    <FlatList
                        data={playerMapData}
                        renderItem={({ item }) => (

                            <Collapse style={styles.collapse}>
                                <CollapseHeader>
                                    <View >
                                        <Image source={{ uri: item.img_regular }} style={styles.imgMap} />
                                        <Text style={styles.mapTitle}>{item.label} ({item.mode})</Text>
                                    </View>
                                </CollapseHeader>

                                <CollapseBody style={styles.collapseBody}>
                                    <View style={styles.collapseStats}>
                                        <View>
                                            <Text style={styles.text}>Matches: <Text style={styles.responseText}>{item.stats['Matches']}</Text></Text>
                                            <Text style={styles.text}>Wins: <Text style={styles.responseText}>{item.stats['Wins']}</Text></Text>
                                            <Text style={styles.text}>Win Rate %: <Text style={styles.responseText}>{item.stats['Win Rate %']}</Text></Text>
                                        </View>
                                        <View>
                                            <Text style={styles.text}>Penta Kills: <Text style={styles.responseText}>{item.stats['Penta Kills']}</Text></Text>
                                            <Text style={styles.text}>Quadro Kills: <Text style={styles.responseText}>{item.stats['Quadro Kills']}</Text></Text>
                                            <Text style={styles.text}>Triple Kills: <Text style={styles.responseText}>{item.stats['Triple Kills']}</Text></Text>
                                        </View>
                                    </View>
                                    <View style={styles.collapseStats}>
                                        <View>
                                            <Text style={styles.text}>MVPs: <Text style={styles.responseText}>{item.stats['MVPs']}</Text></Text>
                                            <Text style={styles.text}>Kills: <Text style={styles.responseText}>{item.stats['Kills']}</Text></Text>
                                            <Text style={styles.text}>Assists: <Text style={styles.responseText}>{item.stats['Assists']}</Text></Text>
                                        </View>
                                        <View>
                                            <Text style={styles.text}>AVG K/D Ratio: <Text style={styles.responseText}>{item.stats['Average K/D Ratio']}</Text></Text>
                                            <Text style={styles.text}>AVG Assists: <Text style={styles.responseText}>{item.stats['Average Assists']}</Text></Text>
                                            <Text style={styles.text}>AVG Headshots: <Text style={styles.responseText}>{item.stats['Average Headshots %']}</Text></Text>
                                        </View>
                                    </View>
                                </CollapseBody>
                            </Collapse>

                        )} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        padding: 10,
        height: '100%',
        backgroundColor: "#21242D",
    },

    backgroundImage: {
        width: "100%",
        height: "100%",
    },

    allinfoContainer: {
        margin: 20,
    },

    sectionTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
        paddingBottom: 20,
    },

    firstInfoContainer: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
    },

    infoContainer: {
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: 10,
        paddingRight: 20,
        paddingLeft: 20,
        textAlign: 'center',
        borderRadius: 20,
    },

    imgPlayers: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },

    mainStatsContainer: {
        margin: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: '#8c8c8c',
        backgroundColor: '#252F3B',
        textAlign: 'center',
    },

    mainStats: {
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'left',
    },

    text: {
        color: '#d4d4d4',
        textTransform: 'uppercase',
    },

    nameText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'none',
    },

    responseText: {
        fontWeight: 'bold',
        color: 'white',
    },

    recentResultSection: {
        padding: 10,
        paddingTop: 20,
        margin: 20,
        borderWidth: 1,
        borderColor: '#8c8c8c',
        backgroundColor: '#252F3B',
        textAlign: 'center',
    },


    recentWinsContainer: {
        alignItems: 'center',
    },

    recentL: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red',
        margin: 10,
    },

    recentW: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'green',
        margin: 10,
    },
    ////

    latestMatchesSection: {
        padding: 20,
        textAlign: "center",
    },

    matchCollapse: {
        backgroundColor: '#252F3B',
        marginBottom: 20,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#8c8c8c',
        

    },

    matchHeader: {
        padding: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },

    headerContainer: {
        flexBasis: '33%',
        alignItems: 'center',
        justifyContent: 'center',

    },

    headerContainerCol: {
        flexDirection: 'row'
    },
    imgMatch: {
        width: 50,
        height: 50,
        borderRadius: 10,

    },

    matchResult: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },

    matchTeam: {
        color: 'white',
    },
    ////


    playerMapSection: {
        margin: 20,
        flex: 1,
        textAlign: 'center',
    },

    collapse: {
        marginBottom: 40,
        padding: 20,
        borderWidth: 1,
        borderColor: '#9c8c8c',
        backgroundColor: '#252F3B'
    },


    imgMap: {
        width: '100%',
        height: 150,
    },

    mapTitle: {
        paddingTop: 10,
        color: '#c5d6ca',
        fontWeight: 'bold',
        fontSize: 18,
    },

    collapseBody: {
        flexDirecton: 'row',
        justifyContent: 'flex-start',
    },

    collapseStats: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        textAlign: 'left',
        marginTop: 20,
    },



})




export default CheckStats;