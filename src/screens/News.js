import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NewsComp } from '../components/NewsComp';
import { ScrollView } from 'react-native-gesture-handler';

const News = () => {

    return (
        <ScrollView>
            <View style={styles.newsContainer}>
                <Text style={styles.title}>Recent CSGO News</Text>
                <NewsComp />
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    newsContainer: {
        backgroundColor: '#21242D',
        padding: 15,
        height: '100%',
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
});

export default News;

