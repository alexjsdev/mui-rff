/// <reference types="react" />
import { KeyboardDatePickerProps as MuiKeyboardDatePickerProps } from '@material-ui/pickers';
import { FieldProps } from 'react-final-form';
export interface KeyboardDatePickerProps extends Partial<Omit<MuiKeyboardDatePickerProps, 'onChange'>> {
    dateFunsUtils?: any;
    fieldProps?: Partial<FieldProps<any, any>>;
}
export declare function KeyboardDatePicker(props: KeyboardDatePickerProps): JSX.Element;
