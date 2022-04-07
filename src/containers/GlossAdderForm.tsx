import { Formik, Form, FormikHelpers } from "formik";
import { Title, Grid } from "@mantine/core";
import FormikController from "src/components/FormikController/FormikController";

type ValueType = {
  fileUpload: FormData | null;
  cliticOption: string;
};

function GlossAdderForm() {
  const initialValues: ValueType = {
    fileUpload: null,
    cliticOption: "",
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

            <FormikController
              control="drop-zone"
              label="FileDropZone"
              name="fileUpload"
            />
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default GlossAdderForm;
