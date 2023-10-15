import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const Screen3b = ({ navigation }) => {
  const [image, setImage] = useState(0);
  const items = [
    {
      id: 0,
      color: "blue",
      titleColor: "xanh",
      url: require("../assets/vs_blue.png"),
    },
    {
      id: 1,
      color: "red",
      titleColor: "đỏ",
      url: require("../assets/vs_red.png"),
    },
    {
      id: 2,
      color: "#fff",
      titleColor: "trắng",
      url: require("../assets/vs_silver.png"),
    },
    {
      id: 3,
      color: "black",
      titleColor: "đen",
      url: require("../assets/vs_black.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <View style={{ flexDirection: "row", padding: 10 }}>
          <Image
            source={items[image]?.url}
            style={{ width: 111, height: 130, resizeMode: "center" }}
          />
          <View style={{marginLeft:20}}>
            <Text style={{ width: 160 }}>
              Điện Thoại Vsmart Joy 3 Hàng chính hãng
            </Text>
            <Text style={{marginTop:10 ,fontSize:18,fontWeight:'bold'}}>Màu:{items[image]?.titleColor}</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 7, backgroundColor: "#cccc" }}>
        {items.map((item, index) => (
          <Pressable style={{ justifyContent: "center", alignItems: "center" }}
          onPress={() => setImage(item.id)}

          >
            <View
              style={{
                width: 80,
                height: 80,
                backgroundColor: item?.color,
                marginTop: 8,
              }}
            ></View>
          </Pressable>
        ))}

        <Pressable onPress={() => navigation.navigate("Lap3a")}>
          <View
            style={{
              marginTop: 20,
              height: 40,
              backgroundColor: "blue",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>XONG</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Screen3b;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
