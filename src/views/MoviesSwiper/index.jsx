import React, { useRef, useState, useEffect, useCallback } from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import {
    View,
    Text,
    useWindowDimensions,
    StyleSheet,
    TouchableOpacity,
    Platform,
    SafeAreaView,
} from "react-native";
import { Image } from "react-native";

import { moviesManager } from "../../services/MoviesManager";

const MoviesSwiper = (props) => {
    const { width, height } = useWindowDimensions();
    const [screenHeight, setScreenHeight] = useState(height);
    const [screenWidth, setScreenWidth] = useState(width);

    const [banners, setBanners] = useState([]);
    const carouselRef = useRef(null);

    const goForward = () => {
        carouselRef.current.snapToNext();
    };

    const fetchBanner = () => {
        moviesManager.getListBanners("GP04").then((res) => {
            // console.log(res);
            setBanners(res.data);
        });
    };

    useEffect(() => {
        fetchBanner();
    }, []);

    const renderItem = useCallback(({ item, index }, parallaxProps) => {
        return (
            <View
                key={index}
                style={{
                    width: screenWidth - (screenWidth * 50) / 100,
                    height: screenHeight / 2,
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
                <Text style={styles.title} numberOfLines={2}>
                    {item.hinhAnh}
                </Text>
            </View>
        );
    });

    return (
        <SafeAreaView style={styles.container}>
            <Carousel
                ref={carouselRef}
                sliderWidth={screenWidth}
                sliderHeight={screenHeight / 2}
                itemWidth={screenWidth - (screenWidth * 50) / 100}
                layoutCardOffset={3}
                hasParallaxImages={true}
                data={banners}
                // renderItem={renderItem}
                renderItem={renderItem}
                loop={true}
                autoplay={true}
                inactiveSlideOpacity={0.5}
                loopClonesPerSide={2}
                autoplayDelay={500}
                autoplayInterval={3000}
            />
        </SafeAreaView>
    );
};

export default MoviesSwiper;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        // flex: 1,
    },
    // item: {
    //     width: screenWidth - (screenWidth * 50) / 100,
    //     height: screenHeight / 2,
    //     // height: screenWidth - screenWidth*50/100,
    // },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: "white",
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: "cover",
        height: "100%",
        borderRadius: 8,
    },
});
