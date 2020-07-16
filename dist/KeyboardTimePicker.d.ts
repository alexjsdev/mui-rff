/// <reference types="react" />
import { KeyboardTimePickerProps as MuiKeyboardTimePickerProps } from '@material-ui/pickers';
import { FieldProps } from 'react-final-form';
export interface KeyboardTimePickerProps extends Partial<Omit<MuiKeyboardTimePickerProps, 'onChange'>> {
    dateFunsUtils?: any;
    fieldProps?: Partial<FieldProps<any, any>>;
}
export declare function KeyboardTimePicker(props: KeyboardTimePickerProps): JSX.Element;
