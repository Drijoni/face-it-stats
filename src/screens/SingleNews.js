import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Footer from '../components/Footer';

const SingleNews = ({ navigation, route: { params: { item } } }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.threeNewsContainer}>
                <Image source={{ uri: item.image }} style={styles.imgNews} />
                <Text style={styles.newsTitle}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>

                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btn}>
                <Text style={styles.btnText}>Go Back</Text>
            </TouchableOpacity>
            </View>
            <Footer />
        </View>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#21242D",
    },
    threeNewsContainer: {
        padding: 10,
        width: "100%",
        marginBottom: 60,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    imgNews: {
        width: '100%',
        height: 200,
        backgroundColor: 'blue',

    },

    newsTitle: {
        color: '#c4c4c4',
        fontWeight: 'bold',
        fontSize: 16,
        paddingTop: 20,
        paddingRight: 0,
        paddingBottom: 10,

    },

    img: {
        width: 100,
        height: '90%',
        resizeMode: 'cover',
        borderRadius: 8,
        marginTop: 5
    },

    description: {
        color: 'white',
        paddingTop: 20,
        paddingBottom:10,

    },

    btn: {
        marginTop:10,
        backgroundColor: "#DD9E37",
        fontSize: 18,
        padding: 10,
        borderRadius: 10,
        width: 140,
        justifyContent: "center",
        alignItems: "center"
    },
    btnText: {
        color: 'white',
        fontWeight:'bold',
    }
})

export default SingleNews;

