import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import { showtimeServices } from "../../services/ShowtimeServices";
import { covertUrlImage } from "../MoviesSwiper";

export default function DetailMovie(props) {
    const [detailMovie, setDetailMovie] = useState();

    const getDetailMovie = (id) => {
        const params = { maPhim: id };
        showtimeServices
            .getDetailShowtimeMovie(params)
            .then((res) => {
                setDetailMovie(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getDetailMovie(props.route.params.idMovie);
    }, [props.route.params.idMovie]);

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                style={{ flex: 1 }}
                source={{ uri: covertUrlImage(detailMovie?.hinhAnh) }}
                resizeMode="cover"
                blurRadius={5}
            >
                <View style={styles.opacity}></View>
                {/* <Text>index</Text> */}
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    opacity: {
        flex: 1,
        opacity: 0.4,
        backgroundColor: "#ffffff",
        blurRadius: 1,
    },
});
