import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

const Lap3a = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image
          source={require("../assets/vs_blue.png")}
          style={[styles.Image1, { width: 350, height: 420 }]}
        ></Image>
      </View>
      <View style={styles.view2}>
        Dien Thoai Vsmart Joy 3 - Hang Chinh Hang
      </View>
      <View style={{ flexDirection: " row" }}>
        <Image
          source={require("../assets/star.png")}
          style={[styles.Image, { width: 32, height: 32 }]}
        ></Image>
        <Image
          source={require("../assets/star.png")}
          style={[styles.Image, { width: 32, height: 32 }]}
        ></Image>
        <Image
          source={require("../assets/star.png")}
          style={[styles.Image, { width: 32, height: 32 }]}
        ></Image>
        <Image
          source={require("../assets/star.png")}
          style={[styles.Image, { width: 32, height: 32 }]}
        ></Image>
        <Image
          source={require("../assets/star.png")}
          style={[styles.Image, { width: 32, height: 32 }]}
        ></Image>
        <Text
          style={{
            fontSize: "18px",
            marginLeft: "25px",
            marginTop: "7px",
            fontWeight: "400",
          }}
        >
          (Xem 828 đánh giá)
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{ fontSize: "30px", marginLeft: "10px", fontWeight: "400" }}
        >
          1.790.000
        </Text>
        <Text
          style={{
            fontSize: "15px",
            marginLeft: "50px",
            fontWeight: "400",
            marginTop: "15px",
            textDecorationLine: "line-through",
          }}
        >
          1.790.000
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontSize: "20px",
            fontWeight: "500",
            color: "red",
            marginLeft: "10px",
          }}
        >
          Ở Đâu Rẻ Hơn Hoàn Tiền
        </Text>
        <Image
          source={require("../assets/Group.png")}
          style={[styles.Image, { width: 25, height: 25, marginLeft: "10px" }]}
        ></Image>
      </View>
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate("Screen3b");
          }}
          style={{
            width: "350px",
            height: "35px",
            borderWidth: "1px",
            borderRadius: "10px",
            marginLeft: "10px",
            marginTop: "10px",
          }}
        >
          <Text
            style={{
              fontSize: "20px",
              fontWeight: "500",
              marginLeft: "100px",
              marginTop: "3px",
            }}
          >
            4 Màu-Chọn Màu
          </Text>
          <Image
            source={require("../assets/Vector.png")}
            style={[
              styles.Image,
              {
                width: 20,
                height: 20,
                marginLeft: "310px",
                marginTop: "-23px",
              },
            ]}
          ></Image>
        </Pressable>
      </View>
      <View>
        <Pressable
          style={{
            width: "370px",
            height: "40px",
            borderWidth: "1px",
            borderRadius: "10px",
            marginLeft: "10px",
            marginTop: "15px",
            backgroundColor: "red",
          }}
        >
          <Text
            style={{
              fontSize: "20px",
              fontWeight: "500",
              marginLeft: "140px",
              marginTop: "3px",
              color: "white",
            }}
          >
            Chọn Mua
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  view1: {
    marginLeft: "10px",
  },
  view2: {
    fontWeight: "500",
    fontSize: "20px",
    marginLeft: "10px",
  },
});
export default Lap3a;