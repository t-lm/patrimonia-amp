/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OrganiserCreateFormInputValues = {
    name?: string;
    description?: string;
    description_en?: string;
    description_es?: string;
    description_de?: string;
    description_nl?: string;
    www?: string;
    phone?: string;
    email?: string;
    type?: string;
};
export declare type OrganiserCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    description_en?: ValidationFunction<string>;
    description_es?: ValidationFunction<string>;
    description_de?: ValidationFunction<string>;
    description_nl?: ValidationFunction<string>;
    www?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrganiserCreateFormOverridesProps = {
    OrganiserCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    description_en?: PrimitiveOverrideProps<TextFieldProps>;
    description_es?: PrimitiveOverrideProps<TextFieldProps>;
    description_de?: PrimitiveOverrideProps<TextFieldProps>;
    description_nl?: PrimitiveOverrideProps<TextFieldProps>;
    www?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrganiserCreateFormProps = React.PropsWithChildren<{
    overrides?: OrganiserCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OrganiserCreateFormInputValues) => OrganiserCreateFormInputValues;
    onSuccess?: (fields: OrganiserCreateFormInputValues) => void;
    onError?: (fields: OrganiserCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrganiserCreateFormInputValues) => OrganiserCreateFormInputValues;
    onValidate?: OrganiserCreateFormValidationValues;
} & React.CSSProperties>;
export default function OrganiserCreateForm(props: OrganiserCreateFormProps): React.ReactElement;
