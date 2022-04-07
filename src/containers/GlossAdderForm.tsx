import { Formik, Form, FormikHelpers } from "formik";
import { Text, Title, Grid } from "@mantine/core";

type ValueType = {
  fileUpload: FormData | null;
  clitic: string;
};

function GlossAdderForm() {
  const initialValues: ValueType = {
    fileUpload: null,
    clitic: "",
  };

  const onSubmit = async (
    values: ValueType,
    actions: FormikHelpers<ValueType>
  ) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formik) => (
        <Form>
          <Grid justify="center" gutter="xl">
            <Grid.Col xs={12} sm={12} md={12} lg={10}>
              <Title order={1} align="center">
                Gloss Adder
              </Title>
            </Grid.Col>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default GlossAdderForm;
