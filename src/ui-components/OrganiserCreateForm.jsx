/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Organiser } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function OrganiserCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    description: "",
    description_en: "",
    description_es: "",
    description_de: "",
    description_nl: "",
    www: "",
    phone: "",
    email: "",
    type: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [description_en, setDescription_en] = React.useState(
    initialValues.description_en
  );
  const [description_es, setDescription_es] = React.useState(
    initialValues.description_es
  );
  const [description_de, setDescription_de] = React.useState(
    initialValues.description_de
  );
  const [description_nl, setDescription_nl] = React.useState(
    initialValues.description_nl
  );
  const [www, setWww] = React.useState(initialValues.www);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [email, setEmail] = React.useState(initialValues.email);
  const [type, setType] = React.useState(initialValues.type);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setDescription(initialValues.description);
    setDescription_en(initialValues.description_en);
    setDescription_es(initialValues.description_es);
    setDescription_de(initialValues.description_de);
    setDescription_nl(initialValues.description_nl);
    setWww(initialValues.www);
    setPhone(initialValues.phone);
    setEmail(initialValues.email);
    setType(initialValues.type);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    description: [{ type: "Required" }],
    description_en: [],
    description_es: [],
    description_de: [],
    description_nl: [],
    www: [],
    phone: [],
    email: [{ type: "Required" }],
    type: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          description,
          description_en,
          description_es,
          description_de,
          description_nl,
          www,
          phone,
          email,
          type,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Organiser(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "OrganiserCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              description_en,
              description_es,
              description_de,
              description_nl,
              www,
              phone,
              email,
              type,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              description_en,
              description_es,
              description_de,
              description_nl,
              www,
              phone,
              email,
              type,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Description en"
        isRequired={false}
        isReadOnly={false}
        value={description_en}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              description_en: value,
              description_es,
              description_de,
              description_nl,
              www,
              phone,
              email,
              type,
            };
            const result = onChange(modelFields);
            value = result?.description_en ?? value;
          }
          if (errors.description_en?.hasError) {
            runValidationTasks("description_en", value);
          }
          setDescription_en(value);
        }}
        onBlur={() => runValidationTasks("description_en", description_en)}
        errorMessage={errors.description_en?.errorMessage}
        hasError={errors.description_en?.hasError}
        {...getOverrideProps(overrides, "description_en")}
      ></TextField>
      <TextField
        label="Description es"
        isRequired={false}
        isReadOnly={false}
        value={description_es}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              description_en,
              description_es: value,
              description_de,
              description_nl,
              www,
              phone,
              email,
              type,
            };
            const result = onChange(modelFields);
            value = result?.description_es ?? value;
          }
          if (errors.description_es?.hasError) {
            runValidationTasks("description_es", value);
          }
          setDescription_es(value);
        }}
        onBlur={() => runValidationTasks("description_es", description_es)}
        errorMessage={errors.description_es?.errorMessage}
        hasError={errors.description_es?.hasError}
        {...getOverrideProps(overrides, "description_es")}
      ></TextField>
      <TextField
        label="Description de"
        isRequired={false}
        isReadOnly={false}
        value={description_de}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              description_en,
              description_es,
              description_de: value,
              description_nl,
              www,
              phone,
              email,
              type,
            };
            const result = onChange(modelFields);
            value = result?.description_de ?? value;
          }
          if (errors.description_de?.hasError) {
            runValidationTasks("description_de", value);
          }
          setDescription_de(value);
        }}
        onBlur={() => runValidationTasks("description_de", description_de)}
        errorMessage={errors.description_de?.errorMessage}
        hasError={errors.description_de?.hasError}
        {...getOverrideProps(overrides, "description_de")}
      ></TextField>
      <TextField
        label="Description nl"
        isRequired={false}
        isReadOnly={false}
        value={description_nl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              description_en,
              description_es,
              description_de,
              description_nl: value,
              www,
              phone,
              email,
              type,
            };
            const result = onChange(modelFields);
            value = result?.description_nl ?? value;
          }
          if (errors.description_nl?.hasError) {
            runValidationTasks("description_nl", value);
          }
          setDescription_nl(value);
        }}
        onBlur={() => runValidationTasks("description_nl", description_nl)}
        errorMessage={errors.description_nl?.errorMessage}
        hasError={errors.description_nl?.hasError}
        {...getOverrideProps(overrides, "description_nl")}
      ></TextField>
      <TextField
        label="Www"
        isRequired={false}
        isReadOnly={false}
        value={www}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              description_en,
              description_es,
              description_de,
              description_nl,
              www: value,
              phone,
              email,
              type,
            };
            const result = onChange(modelFields);
            value = result?.www ?? value;
          }
          if (errors.www?.hasError) {
            runValidationTasks("www", value);
          }
          setWww(value);
        }}
        onBlur={() => runValidationTasks("www", www)}
        errorMessage={errors.www?.errorMessage}
        hasError={errors.www?.hasError}
        {...getOverrideProps(overrides, "www")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              description_en,
              description_es,
              description_de,
              description_nl,
              www,
              phone: value,
              email,
              type,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              description_en,
              description_es,
              description_de,
              description_nl,
              www,
              phone,
              email: value,
              type,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              description_en,
              description_es,
              description_de,
              description_nl,
              www,
              phone,
              email,
              type: value,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
