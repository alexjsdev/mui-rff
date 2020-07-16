import React, { ReactNode } from 'react';
import { SelectProps as MuiSelectProps, FormControlProps, FormHelperTextProps, InputLabelProps, MenuItemProps } from '@material-ui/core';
import { FieldProps } from 'react-final-form';
export interface SelectData {
    label: string;
    value: string | number | string[] | undefined;
    disabled?: boolean;
}
export interface SelectProps extends Partial<Omit<MuiSelectProps, 'onChange'>> {
    name: string;
    label?: ReactNode;
    required?: boolean;
    multiple?: boolean;
    helperText?: string;
    fieldProps?: Partial<FieldProps<any, any>>;
    formControlProps?: Partial<FormControlProps>;
    inputLabelProps?: Partial<InputLabelProps>;
    formHelperTextProps?: Partial<FormHelperTextProps>;
    showError?: Function;
    menuItemProps?: Partial<MenuItemProps>;
    data?: SelectData[];
    children?: React.ReactElement | React.ReactElement[];
}
export declare function Select(props: SelectProps): JSX.Element;
