import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, NavigationContainer } from '@react-navigation/native';


/*API*/
 // In case the request gets blocked, use this api instead
//const API = "https://jsonplaceholder.typicode.com/posts"


const API = "https://gnews.io/api/v4/search?q=counter%20strike%20global%20offensive&token=984f36dc6a59aed4dfbdd10f8b8b892e"


/*Return News*/
const NewsComp = () => {
    const navigation = useNavigation();
 

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch(API)
            response = await response.json()
            setData(response.articles); /// if u use the placeholder api ,  remove the .articles
        }
        fetchMyAPI()
    }, [])


    return (

        <View style={styles.allflatListContainer}>

            <FlatList

                data={data}
                renderItem={({ item }) => (

                    <TouchableOpacity onPress={() => navigation.navigate('SingleNews', { item })}>
                        <View style={styles.threeNewsContainer}>
                            <Image source={{ uri: item.image }} style={styles.imgNews} />
                            <Text style={styles.newsTitle}>{item.title}</Text>
                            <TouchableOpacity style={styles.readMoreBtnAll}><Text style={styles.btnText}>Read More</Text></TouchableOpacity>
                        </View>
                    </TouchableOpacity >


                )} />

        </View>
    )

}





/* Return only 3 news with different design */
const ThreeNewsComp = () => {
    const navigation = useNavigation();

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch(API)
            response = await response.json()
            setData(response.articles.slice(0, 3)); /// if u use the placeholder api ,  remove the .articles
        }
        fetchMyAPI()
    }, [])

    //console.log(data)

    return (
        <View style={styles.flatListContainer}>
            <FlatList

                data={data}
                renderItem={({ item }) => (
                    <View style={styles.threeNewsContainer}>
                        <Image source={{ uri: item.image }} style={styles.imgNews} />
                        <Text style={styles.newsTitle}>{item.title}</Text>
                    </View>


                )} />
            <TouchableOpacity onPress={() => navigation.navigate('News')} style={styles.readMoreBtn}><Text style={styles.btnText}>See More News</Text></TouchableOpacity>
        </View>

    )

}




const styles = StyleSheet.create({

    flatListContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    threeNewsContainer: {
        padding: 10,
        width: "100%",
        marginBottom: 60,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#252F3B',

    },

    imgNews: {
        width: '100%',
        height: 200,

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

    readMoreBtn: {
        borderWidth: 2,
        borderColor: 'orange',
        fontSize: 18,
        padding: 10,
        borderRadius: 10,
        width: 140,
        textAlign: 'center',
        marginBottom: 20,
    },

    readMoreBtnAll: {
        marginTop: 20,
        borderBottomWidth: 2,
        borderColor: 'orange',
        fontSize: 16,
        padding: 5,
        width: 140,
        textAlign: 'center',

    },

    btnText: {
        color: 'white',
        fontWeight: 'bold',
    },

    /* For all news*/

    allflatListContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export { NewsComp, ThreeNewsComp};