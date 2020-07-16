import { ReactNode } from 'react';
import { FieldProps } from 'react-final-form';
import { TextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField';
import { AutocompleteProps as MuiAutocompleteProps } from '@material-ui/lab/Autocomplete';
export declare type AutocompleteData = {
    [key: string]: any | null;
};
export interface AutocompleteProps extends Partial<Omit<MuiAutocompleteProps<any>, 'onChange'>> {
    name: string;
    label: ReactNode;
    helperText?: string;
    required?: boolean;
    multiple?: boolean;
    getOptionValue?: (option: any) => any;
    options: AutocompleteData[];
    fieldProps?: Partial<FieldProps<any, any>>;
    textFieldProps?: Partial<MuiTextFieldProps>;
}
export declare const Autocomplete: (props: AutocompleteProps) => JSX.Element;
