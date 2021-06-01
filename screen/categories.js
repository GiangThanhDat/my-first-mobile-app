import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CatergoryListItem from "../Component/CatergoryListItem";

import atom from "../assets/atom.png";
import drink from "../assets/drink.png";
import burger from "../assets/burger.png";


export default function categories({ navigation }) {
    const [categories, setCategories] = useState([
        { id: 1, name: "Thức ăn", img: burger },
        { id: 2, name: "Nước uốn", img: drink },
        { id: 3, name: "bla bla", img: atom }
    ]);

    return (

        <View style={styles.container}>
            <ScrollView style={{ paddingLeft: 16, paddingRight: 16 }} >
                {/* FlastList giống như map */}
                <FlatList
                    data={categories}
                    renderItem={({ item }) => <CatergoryListItem catItem={item}
                        onPress={() => {
                            navigation.navigate('CATEGORY', { id: item.id })
                        }}
                    />}
                    keyExtractor={item => `${item.id}`}
                    contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
                />
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16
    },
});
