import React, { useRef, useCallback } from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import {
    View,
    Text,
    useWindowDimensions,
    StyleSheet,
    TouchableOpacity,
    Platform,
    SafeAreaView,
    Image,
} from "react-native";
import ButtonText from "../../components/ButtonText";
import { useNavigation } from "@react-navigation/native";

export const covertUrlImage = (url) => {
    if (url) {
        return `https${url.slice(4, url.length)}`;
    }
};

const MoviesSwiper = (props) => {
    const { height, width } = useWindowDimensions();
    const navigation = useNavigation();
    const carouselRef = useRef(null);

    const renderItem = useCallback(({ item, index }, parallaxProps) => {
        return (
            <View
                key={index}
                style={{
                    width: width - (width * 50) / 100,
                    height: height / 2.5,
                }}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    style={[{ flex: 1 }]}
                    onPress={() => {
                        navigation.navigate("DetailMovie", {
                            idMovie: item.maPhim,
                        });
                    }}
                >
                    <ParallaxImage
                        source={{
                            uri: covertUrlImage(item.hinhAnh),
                        }}
                        containerStyle={styles.imageContainer}
                        style={styles.image}
                        parallaxFactor={0.4}
                        {...parallaxProps}
                    />
                </TouchableOpacity>
                <ButtonText
                    activeOpacity={0.8}
                    title={"TICKET"}
                    fontSize={13}
                    style={styles.btnBuy}
                    onPress={() => {
                        navigation.navigate("DetailMovie", {
                            idMovie: item.maPhim,
                        });
                    }}
                />
            </View>
        );
    });

    return (
        <SafeAreaView style={styles.container}>
            <Carousel
                ref={carouselRef}
                sliderWidth={width}
                sliderHeight={height / 2.5}
                itemWidth={width - (width * 50) / 100}
                layoutCardOffset={3}
                hasParallaxImages={true}
                data={props.banners}
                renderItem={renderItem}
                loop={true}
                inactiveSlideOpacity={0.5}
            />
        </SafeAreaView>
    );
};

export default MoviesSwiper;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: "white",
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: "contain",
        height: "100%",
        borderRadius: 8,
    },
    btnBuy: {
        marginTop: -30,
    },
});
