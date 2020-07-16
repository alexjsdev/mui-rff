/// <reference types="react" />
import { DateTimePickerProps as MuiDateTimePickerProps } from '@material-ui/pickers';
import { FieldProps } from 'react-final-form';
export interface DateTimePickerProps extends Partial<Omit<MuiDateTimePickerProps, 'onChange'>> {
    dateFunsUtils?: any;
    fieldProps?: Partial<FieldProps<any, any>>;
}
export declare function DateTimePicker(props: DateTimePickerProps): JSX.Element;
