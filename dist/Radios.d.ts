import { ReactNode } from 'react';
import { RadioProps as MuiRadioProps, RadioGroupProps, FormControlProps, FormControlLabelProps, FormHelperTextProps, FormLabelProps } from '@material-ui/core';
import { FieldProps } from 'react-final-form';
export interface RadioData {
    label: ReactNode;
    value: unknown;
    disabled?: boolean;
}
export interface RadiosProps extends Partial<Omit<MuiRadioProps, 'onChange'>> {
    name: string;
    data: RadioData[];
    label?: ReactNode;
    required?: boolean;
    helperText?: string;
    formLabelProps?: Partial<FormLabelProps>;
    formControlLabelProps?: Partial<FormControlLabelProps>;
    fieldProps?: Partial<FieldProps<any, any>>;
    formControlProps?: Partial<FormControlProps>;
    radioGroupProps?: Partial<RadioGroupProps>;
    formHelperTextProps?: Partial<FormHelperTextProps>;
    showError?: Function;
}
export declare function Radios(props: RadiosProps): JSX.Element;
