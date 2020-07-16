import { ReactNode } from 'react';
import { Schema as YupSchema, ValidationError as YupValidationError } from 'yup';
export declare type Translator = (errorObj: YupValidationError) => string | ReactNode;
export interface ValidationError {
    [key: string]: ValidationError | string;
}
/**
 * Wraps the execution of a Yup schema to return an Promise<ValidationError>
 * where the key is the form field and the value is the error string.
 */
export declare function makeValidate<T>(validator: YupSchema<T>, translator?: Translator): (values: T) => Promise<ValidationError>;
/**
 * Wraps the sync execution of a Yup schema to return an ValidationError
 * where the key is the form field and the value is the error string.
 */
export declare function makeValidateSync<T>(validator: YupSchema<T>, translator?: Translator): (values: T) => ValidationError;
/**
 * Uses the private _exclusive field in the schema to get whether or not
 * the field is marked as required or not.
 */
export declare function makeRequired<T>(schema: YupSchema<T>): any;
