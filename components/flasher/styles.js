import { StyleSheet } from "react-native";
import { COLORS } from "@styles/colors";

export default StyleSheet.create({
  flashBox: {
    width: "95%",
    backgroundColor: COLORS.SUCCESS,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  flashImg: { height: 20, width: 20 },
  success: {
    backgroundColor: COLORS.SUCCESS,
  },
  warning: {
    backgroundColor: COLORS.WARNING,
  },
  error: {
    backgroundColor: COLORS.WARNING,
  },
  info: {
    backgroundColor: COLORS.PRIMARY,
  },
  ok: {},
});