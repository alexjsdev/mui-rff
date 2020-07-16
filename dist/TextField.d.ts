/// <reference types="react" />
import { TextFieldProps as MuiTextFieldProps } from '@material-ui/core';
import { FieldProps, FieldRenderProps } from 'react-final-form';
export declare const TYPE_PASSWORD = "password";
export declare const TYPE_TEXT = "text";
export declare const TYPE_EMAIL = "email";
export declare const TYPE_NUMBER = "number";
export declare const TYPE_URL = "url";
export declare const TYPE_TELEPHONE = "tel";
export declare const TYPE_DATE = "date";
export declare const TYPE_DATETIME_LOCAL = "datetime-local";
export declare const TYPE_MONTH = "month";
export declare const TYPE_TIME = "time";
export declare const TYPE_WEEK = "week";
export declare type TEXT_FIELD_TYPE = typeof TYPE_PASSWORD | typeof TYPE_TEXT | typeof TYPE_EMAIL | typeof TYPE_NUMBER | typeof TYPE_URL | typeof TYPE_TELEPHONE | typeof TYPE_DATE | typeof TYPE_DATETIME_LOCAL | typeof TYPE_MONTH | typeof TYPE_TIME | typeof TYPE_WEEK;
export declare type TextFieldProps = Partial<Omit<MuiTextFieldProps, 'type' | 'onChange'>> & {
    name: string;
    type?: TEXT_FIELD_TYPE;
    fieldProps?: Partial<FieldProps<any, any>>;
};
export declare function TextField(props: TextFieldProps): JSX.Element;
declare type TextWrapperProps = FieldRenderProps<MuiTextFieldProps, HTMLElement>;
export declare function TextFieldWrapper(props: TextWrapperProps): JSX.Element;
export {};
