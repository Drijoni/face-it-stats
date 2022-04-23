import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { TopThreeTeams } from '../components/TopTeams';
import { TopThreePlayers } from '../components/TopPlayers';
import { ThreeNewsComp } from '../components/NewsComp';
import Footer from '../components/Footer';
import { ScrollView } from 'react-native-gesture-handler';
import { render } from 'react-dom';
import { Button } from 'react-native-web';
import { useNavigation, NavigationContainer } from '@react-navigation/native';


/*

/// design

/// 3 sections (search user, highest rated players, news, ) + footer

//news https://gnews.io/api/v4/search?q=counter%20strike%20global%20offensive&token=984f36dc6a59aed4dfbdd10f8b8b892e


*/



const Home = ({navigation}) => {
  
    const [nickname, setNickname] = useState([]);

    

    return (
        <View style={styles.mainContainer}>
            <ScrollView>
                <View style={styles.firstSection}>
                    <Text style={styles.firstSectionTitle}>CSGO Face-it Stats Checker</Text>
                    <Text style={styles.firstSectionDesc}>With CSELO you can check your Level, Elo, History, Bans and Specific Statistics on any map, completely for free!</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Your Face it username"
                            value={nickname}
                            onChangeText={(nickname) => setNickname(nickname)}

                        />

                 
                    </View>       <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('Stats', {
                                paramNick:nickname
                            })
                            
                            
                         } }
                        >
                            <Text style={styles.buttonText}>Get Started</Text>
                        </TouchableOpacity>
                </View>

                <View style={styles.secondSection}>
                    <Text style={styles.sectionTitle}>HIGHEST RANKED TEAMS</Text>
                    <TopThreeTeams />

                </View>

                <View style={styles.thirdSection}>
                    <Text style={styles.sectionTitle}>Highest Rated Players</Text>
                    <TopThreePlayers />
                </View>

                <View style={styles.fourthSection}>
                    <Text style={styles.sectionTitle}>Recent News</Text>
                    <ThreeNewsComp />
                </View>


                <View style={styles.footerSection}>
                    <Footer />
                </View> 
            </ScrollView>

        </View>
    )
}



const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: "#21242D",

    },

    sectionTitle: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 30,
        paddingBottom: 10,
        textTransform: 'uppercase',
        borderBottomWidth: 2,
        borderBottomColor: '#ababab',
        marginBottom: 10,
    },

    firstSection: {
        padding: 15,
        paddingTop: 30,
    },

    firstSectionTitle: {
        fontSize: 24,
        color: "white",
        fontWeight: "500",
    },

    firstSectionDesc: {
        fontSize: 14,
        color: "white",
        marginVertical: 20,
    },

    button: {
        backgroundColor: "#DD9E37",
        fontSize: 18,
        padding: 10,
        borderRadius: 10,
        width: 140,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        color: "white",
        fontWeight: "600",
    },

    secondSection: {
        padding: 15,
        paddingTop: 30,
    },

    thirdSection: {
        padding: 10,
        paddingTop: 30,
    },

    fourthSection: {
        padding: 10,
        paddingTop: 30,
    },

    inputContainer: {
        marginBottom:20,
    },
    input: {
        color: 'white',
        borderBottomWidth: 2,
        borderBottomColor:'#ababab',
    }



});


export default Home;