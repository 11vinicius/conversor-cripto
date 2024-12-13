import { IPickerItem } from "@/app/interfaces/IPickerItem";
import { Picker } from "@react-native-picker/picker";
import { Text, View, StyleSheet } from "react-native";

interface IProps {
    options: IPickerItem[],
    moneySelected: string,
    onChange: (value: string) => void
}

export function PickerItem(props: IProps) {
    return (
        <Picker
            selectedValue={props.moneySelected}
            onValueChange={(itemValue) => props.onChange(itemValue)}
            mode="dropdown"
        >
            {props.options.map((item: IPickerItem) => {
                return (
                    <Picker.Item label={item.label} value={item.value} key={item.key} />
                )
            })}
        </Picker>

    )

}