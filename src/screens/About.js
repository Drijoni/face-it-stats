import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Footer from '../components/Footer';
import { ScrollView } from 'react-native-gesture-handler';
const About = () => {
    return (
        <ScrollView>
            <View style={styles.entireAboutContainer}>
                <View style={styles.boxes}>
                    <View style={styles.section}>
                        <Text style={styles.title}>About CSELO </Text>
                        <Text style={styles.description}>
                            CSELO is an app that is used to check your CS:GO stats for the popular competitive FACEIT platform. You can check your faceit progress, your faceit elo, faceit level, match history, Headshot Percentage, HLTV Rating, ELO needed for next level and in depth statistics for every match.This website can be used as a free faceit elo checker.
                        </Text>
                        <Text style={styles.email}>myemail@something.domain</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.title}>Face-it Elo Progress Upadate</Text>
                        <Image source={require('../img/faceitChart2.png')} style={styles.imgStatsChart} />
                        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim nulla mi, sed gravida purus dapibus eu. Nullam bibendum ex id lacus cursus, in mattis lorem eleifend. Nam sit amet erat orci. Cras condimentum faucibus laoreet. Maecenas ultrices, magna at viverra eleifend, risus leo semper sapien, a laoreet erat velit vel velit. Nulla luctus mauris lorem, nec cursus quam finibus vitae </Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.title}>Chart update</Text>
                        <Image source={require('../img/faceitChart.png')} style={styles.imgStats} />
                        <Text style={styles.description}>Phasellus sollicitudin urna non hendrerit eleifend. Nunc et felis viverra, venenatis turpis aliquam, ultricies orci. Sed nunc est, faucibus nec mi vel, tempus pellentesque lorem. Nulla enim enim, tincidunt quis lectus sit amet, lobortis efficitur dui. Pellentesque venenatis interdum elit ut finibus. Nulla facilisi. Vivamus egestas nec lorem vel dictum. </Text>
                    </View>
                </View>

                <Footer />
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({

    entireAboutContainer: {
        backgroundColor: '#21242D',

    },

    boxes: {
        padding: 10,

    },

    section: {
        marginTop: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#929a9e',
        backgroundColor: '#252F3B',
        borderRadius: 5,

    },

    title: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
    },

    email: {
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold',
        padding: 20,
    },

    description: {
        color: '#929a9e',
        marginTop: 20,
    },

    imgStats: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },

    imgStatsChart: {
        width: '90%',
        height: 100,
    }


});

export default About;