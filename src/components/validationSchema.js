import * as yup from "yup";

const schema = yup.object().shape({
  userId: yup
    .number("The userId is incorrect. Edit the field")
    .required("You must specify the userId")
    .min(1, "The userId must be a positive number"),
  title: yup
    .string()
    .min(10, "The title should be no shorter than 10 characters")
    .required("The title plays an important role, don`t forget to add it"),
  body: yup
    .string()
    .min(20, "The description should be no shorter than 20 characters")
    .required(
      "The description plays an important role, don`t forget to add it"
    ),
});

export default schema;
