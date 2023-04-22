import { Button, Form, Input } from "antd";
import { Formik } from "formik";
import schema from "./validationSchema";

const { TextArea } = Input;

const initialValues = {
  userId: 0,
  title: "",
  body: "",
};

function AddPost({ submit }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(value, { resetForm }) => {
        submit(value);
        resetForm();
      }}
    >
      {({ handleSubmit, touched, errors, getFieldProps }) => (
        <Form
          name="basic"
          labelCol={{
            span: 5,
          }}
          wrapperCol={{
            span: 17,
          }}
          onFinish={handleSubmit}
          layout="horizontal"
          size="large"
          autoComplete="off"
        >
          <Form.Item
            label="UserId"
            htmlFor="userId"
            help={touched.userId && errors.userId ? errors.userId : ""}
            validateStatus={
              touched.userId && errors.userId ? "error" : undefined
            }
          >
            <Input type="number" min="0" {...getFieldProps("userId")} />
          </Form.Item>

          <Form.Item
            label="Title"
            htmlFor="title"
            help={touched.title && errors.title ? errors.title : ""}
            validateStatus={touched.title && errors.title ? "error" : undefined}
          >
            <Input {...getFieldProps("title")} />
          </Form.Item>

          <Form.Item
            label="Body"
            htmlFor="body"
            help={touched.body && errors.body ? errors.body : ""}
            validateStatus={touched.body && errors.body ? "error" : undefined}
          >
            <TextArea showCount maxLength={200} {...getFieldProps("body")} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Send
            </Button>
          </Form.Item>
        </Form>
      )}
    </Formik>
  );
}
export default AddPost;
