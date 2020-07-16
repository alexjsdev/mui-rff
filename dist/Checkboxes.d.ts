import { CheckboxProps as MuiCheckboxProps, FormControlLabelProps, FormControlProps, FormGroupProps, FormHelperTextProps, FormLabelProps } from '@material-ui/core';
import { ReactNode } from 'react';
import { FieldProps } from 'react-final-form';
export interface CheckboxData {
    label: ReactNode;
    value: unknown;
    disabled?: boolean;
}
export interface CheckboxesProps extends Partial<Omit<MuiCheckboxProps, 'onChange'>> {
    name: string;
    data: CheckboxData | CheckboxData[];
    label?: ReactNode;
    required?: boolean;
    helperText?: string;
    fieldProps?: Partial<FieldProps<any, any>>;
    formControlProps?: Partial<FormControlProps>;
    formGroupProps?: Partial<FormGroupProps>;
    formLabelProps?: Partial<FormLabelProps>;
    formControlLabelProps?: Partial<FormControlLabelProps>;
    formHelperTextProps?: Partial<FormHelperTextProps>;
    showError?: Function;
}
export declare function Checkboxes(props: CheckboxesProps): JSX.Element;
