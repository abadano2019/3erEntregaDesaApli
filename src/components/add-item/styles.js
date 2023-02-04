import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 80,
        marginHorizontal: 20,
      },
      input: {
        width: '75%',
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        height: 40,
        color: colors.textColorPrimary,
      },
      
})