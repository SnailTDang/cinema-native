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
                    height: height / 2,
                }}
            >
                <ParallaxImage
                    source={{
                        uri: `https${item.hinhAnh.slice(
                            4,
                            item.hinhAnh.length
                        )}`,
                    }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <ButtonText
                    activeOpacity={0.8}
                    title={"BUY TICKET"}
                    onPress={() => {
                        navigation.navigate("DetailMovie");
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
                sliderHeight={height / 2}
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
});
