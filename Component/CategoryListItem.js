import React from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import burger from "../assets/burger.png";
function CategoryListItem({ catItem, onPress }) {
    const { name, img, text } = catItem;
    // console.log(catItem);
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPress} >
            <View style={style.container}>
                <Text style={style.title}>{name}</Text>
                <Image style={style.categoryImage} source={img} />
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>

    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        borderRadius: 4,
        margin: 10,
        backgroundColor: '#FFF',
        shadowColor: '#111',
        shadowOpacity: 0.4,
        shadowRadius: 15,
        shadowOffset: { width: 0, height: 0 }
    },
    categoryImage: {
        width: 64,
        height: 64
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    }
});

export default CategoryListItem
