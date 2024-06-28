import { useField } from "formik";
import { FC } from "react";
import { FormField, Label } from "semantic-ui-react";

interface Props {
  placeholder: string;
  name: string;
  label?: string;
  type?: string;
}

const MyTextInput: FC<Props> = (props: Props) => {
  const [field, meta] = useField(props.name);
  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{props.label}</label>
      <input {...field} {...props}></input>
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
};

export default MyTextInput;
