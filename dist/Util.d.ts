/// <reference types="react" />
import { FormHelperTextProps } from '@material-ui/core';
import { FieldMetaState } from 'react-final-form';
export interface ErrorMessageProps {
    showError: boolean;
    meta: FieldMetaState<any>;
    formHelperTextProps?: Partial<FormHelperTextProps>;
    helperText?: string;
}
export declare function ErrorMessage({ showError, meta, formHelperTextProps, helperText }: ErrorMessageProps): JSX.Element;
export interface ShowErrorProps {
    meta: FieldMetaState<any>;
}
export declare function useFieldForErrors(name: string): import("react-final-form").FieldRenderProps<any, HTMLElement>;
export declare function showErrorOnChange({ meta: { submitError, dirtySinceLastSubmit, error, touched, modified }, }: ShowErrorProps): boolean;
export declare function showErrorOnBlur({ meta: { submitError, dirtySinceLastSubmit, error, touched } }: ShowErrorProps): boolean;
