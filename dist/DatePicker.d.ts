/// <reference types="react" />
import { DatePickerProps as MuiDatePickerProps } from '@material-ui/pickers';
import { FieldProps } from 'react-final-form';
export interface DatePickerProps extends Partial<Omit<MuiDatePickerProps, 'onChange'>> {
    dateFunsUtils?: any;
    fieldProps?: Partial<FieldProps<any, any>>;
}
export declare function DatePicker(props: DatePickerProps): JSX.Element;
