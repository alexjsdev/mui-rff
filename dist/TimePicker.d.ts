/// <reference types="react" />
import { TimePickerProps as MuiTimePickerProps } from '@material-ui/pickers';
import { FieldProps } from 'react-final-form';
export interface TimePickerProps extends Partial<Omit<MuiTimePickerProps, 'onChange'>> {
    dateFunsUtils?: any;
    fieldProps?: Partial<FieldProps<any, any>>;
}
export declare function TimePicker(props: TimePickerProps): JSX.Element;
