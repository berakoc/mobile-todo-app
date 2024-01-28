import {StyleSheet, TextInput as BaseTextInput, TextInputProps} from "react-native";
import {Color} from "../../common";
import {useState} from "react";

/**
 * @param {TextInputProps & { focusedBorderColor: string }} props
 */
export default function TextInput({ focusedBorderColor, children, style, ...otherProps }) {
    const [isFocused, setFocused ] = useState(false);
    const onBlur = () => {
        setFocused(false);
    }
    const onFocus = () => {
        setFocused(true)
    }

    return <BaseTextInput onFocus={onFocus} onBlur={onBlur} style={[styles.todoInput, style, {
        borderColor: isFocused ? focusedBorderColor : '#94ADD7'
    }]} placeholderTextColor="#94ADD7" {...otherProps}>{children}</BaseTextInput>
}

const styles = StyleSheet.create({
    todoInput: {
        fontSize: 16,
        borderWidth: 2,
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 12,
        backgroundColor: '#293462',
        color: Color.PRIMARY,
        fontWeight: '600',
    },
})