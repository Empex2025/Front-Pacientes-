import { View, Text, StyleSheet } from "react-native";

export const InicialText = ({ Title, subTitle, text, style }) => {
  return (
    <View style={[style.CentralizarItems, styles.textContent]}>
      <Text style={style.FormatarTexto(23, 700, "black")}>{Title}</Text>
      <Text style={style.FormatarTexto(16, 700, "gray")}>{subTitle}</Text>
      <Text style={style.FormatarTexto(17, 400, "gray")}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContent: {
    padding: 1,
    gap: 8,
    paddingHorizontal: 20,
  },
});
