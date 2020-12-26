import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("screen");
export default function Article3() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Image
        style={styles.storyImage}
        source={require("../../../assets/whitecar.jpg")}
      />
      <View style={styles.cardDetails}>
        <Text style={styles.title}>
          History of ft.Lt JJ Rawlings
        </Text>

        <View style={styles.writerInfo}>
          <Image
            style={styles.writerImage}
            source={require("../../../assets/jjba.png")}
          />

          <Text style={styles.writerName}>JJ Rawlings</Text>

          <Text style={styles.readTime}> | 10 min</Text>
        </View>

        <Text style={styles.story}>
        Jerry John Rawlings (22 June 1947 – 12 November 2020) was a Ghanaian military officer
        and politician who led the country from 1981 to 2001 and also for a brief
        period in 1979. He led a military junta until 1992, and then served two terms
        as the democratically elected president of Ghana.
          {"\n"}
          {"\n"}
          Rawlings came to power in Ghana as a flight lieutenant of the Ghana Air Force
           following a coup d'état in 1979. Prior to that, he led an unsuccessful coup
            attempt against the ruling military government on 15 May 1979, just five weeks
             before scheduled democratic elections were due to take place. After handing power
              over to a civilian government, he took back control of the country on 31 December
               1981 as the chairman of the Provisional National Defence Council (PNDC). 
          {"\n"}
          {"\n"}
          In 1992, Rawlings resigned from the military, founded the National 
          Democratic Congress (NDC), and became the first President of the Fourth Republic.
           He was re-elected in 1996 for four more years.[5][6] After two terms in office, 
           the limit according to the Ghanaian Constitution, 
           Rawlings endorsed his vice-president John Atta Mills as a presidential candidate in 2000.
            Rawlings served as the African Union envoy to Somalia.[7] He died in November 2020, at age 73.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 18,
  },

  storyImage: {
    height: 0.7 * width,
    width: 0.9 * width,
  },

  title: {
    fontSize: 20,
    fontFamily: "serif",
  },

  writerInfo: {
    // flex:2,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 9,
  },

  writerImage: {
    width: 35,
    height: 35,
    borderRadius: 35,
    marginRight: 10,
  },

  writerName: {
    color: "#858585",
    fontSize: 16,
    fontFamily: "serif",
  },

  readTime: {
    color: "#a3a3a3",
    fontSize: 15,
    fontFamily: "serif",
  },

  story: {
    color: "#858585",
    fontSize: 18,
    fontFamily: "serif",
  },
});
