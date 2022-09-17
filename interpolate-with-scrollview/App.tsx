import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { Page } from "./components/Page";

const WORDS = ["What's", "up", "mobile", "devs?"];

export default function App() {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <Animated.ScrollView
      pagingEnabled
      scrollEventThrottle={16}
      onScroll={scrollHandler}
      style={styles.container}
      horizontal
    >
      {WORDS.map((title, index) => {
        return (
          <Page
            key={index.toString()}
            index={index}
            title={title}
            translateX={translateX}
          />
        );
      })}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
