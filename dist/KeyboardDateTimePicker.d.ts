/// <reference types="react" />
import { KeyboardDateTimePickerProps as MuiKeyboardDateTimePickerProps } from '@material-ui/pickers';
import { FieldProps } from 'react-final-form';
export interface KeyboardDateTimePickerProps extends Partial<Omit<MuiKeyboardDateTimePickerProps, 'onChange'>> {
    dateFunsUtils?: any;
    fieldProps?: Partial<FieldProps<any, any>>;
}
export declare function KeyboardDateTimePicker(props: KeyboardDateTimePickerProps): JSX.Element;
