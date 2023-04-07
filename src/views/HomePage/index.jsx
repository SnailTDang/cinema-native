import { StyleSheet } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { loginStyles } from "../Login";
import { SafeAreaView } from "react-native";
import MoviesSwiper from "../MoviesSwiper";
import { moviesManager } from "../../services/MoviesManager";
import { ScrollView } from "react-native";
import { View, Text } from "react-native";
import ButtonText from "../../components/ButtonText";
import colorHex from "../../constants/colorHex";

const paramsDefault = {
    tuNgay: "01/01/2022",
    maNhom: "GP09",
    denNgay: "01/10/2022",
};

export default function HomePage(props) {
    const [banners, setBanners] = useState([]);
    const [params, setParams] = useState(paramsDefault);
    const [isActiveBtn, setIsActiveBtn] = useState("showing");

    const getMoviesFromDate = (params) => {
        moviesManager
            .getListMovies(params)
            .then((res) => {
                // console.log(res);
                setBanners(res.data);
            })
            .catch(() => {
                getMoviesFromDate(params);
            });
    };

    const hanldeActiveBtn = (type) => {
        if (type !== isActiveBtn) {
            setIsActiveBtn(type);
        }
    };

    const changeMoviesFromeDate = useCallback((type) => {
        if (type !== isActiveBtn) {
            if (type === "showing") {
                setParams(paramsDefault);
            } else {
                setParams({
                    tuNgay: "01/10/2022",
                    maNhom: "GP09",
                    denNgay: "01/10/2023",
                });
            }
            hanldeActiveBtn(type);
        }
    });

    useEffect(() => {
        getMoviesFromDate(params);
    }, [params]);

    return (
        <SafeAreaView style={loginStyles.safeAreaView}>
            <ScrollView>
                <View style={styles.slectParams}>
                    <ButtonText
                        title={"SHOWING"}
                        activeOpacity={0.8}
                        style={[
                            styles.btnSelect,
                            {
                                backgroundColor:
                                    isActiveBtn === "showing"
                                        ? colorHex.mainOrange
                                        : "transparent",
                            },
                        ]}
                        onPress={() => {
                            changeMoviesFromeDate("showing");
                        }}
                    />
                    <ButtonText
                        title={"COMING"}
                        activeOpacity={0.8}
                        style={[
                            styles.btnSelect,
                            {
                                backgroundColor:
                                    isActiveBtn === "coming"
                                        ? colorHex.mainOrange
                                        : "transparent",
                            },
                        ]}
                        onPress={() => {
                            changeMoviesFromeDate("coming");
                        }}
                    />
                </View>
                <MoviesSwiper banners={banners} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    slectParams: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 15,
    },
    btnSelect: {
        marginTop: 15,
        width: "40%",
        borderColor: "#ffffff",
        borderWidth: 2,
    },
});
