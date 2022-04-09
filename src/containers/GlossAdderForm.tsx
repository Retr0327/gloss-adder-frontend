import * as Yup from "yup";
import { IconUpload } from "@tabler/icons";
import SelectedFiles from "./SelectedFiles";
import { FormValueType } from "src/typings";
import { Formik, Form, FormikHelpers } from "formik";
import { Title, Grid, Button, Center } from "@mantine/core";
import { AlertMessage, FormikController } from "@components/index";

function GlossAdderForm() {
  const initialValues: FormValueType = {
    fileUpload: [],
    cliticOption: "",
  };

  const validationSchema = Yup.object({
    fileUpload: Yup.mixed().required("請先選檔案！"),
    // clitic: Yup.number().required("請選擇是否分開人稱代名詞"),
  });

  const onSubmit = async (
    values: FormValueType,
    actions: FormikHelpers<FormValueType>
  ) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <Grid justify="center" gutter="xl">
            <Grid.Col xs={12} sm={12} md={12} lg={10}>
              <Title order={1} align="center">
                Gloss Adder
              </Title>
            </Grid.Col>

            <Grid.Col xs={12} sm={12} md={12} lg={10}>
              <FormikController
                control="drop-zone"
                label="fileUpload"
                name="fileUpload"
                uploadedFile={formik.values.fileUpload}
              />
            </Grid.Col>

            <Grid.Col xs={12} sm={12} md={12} lg={10}>
              <SelectedFiles files={formik.values.fileUpload} />
            </Grid.Col>

            <Grid.Col xs={12} sm={12} md={12} lg={10} mt={60}>
              <Center>
                <Button type="submit" leftIcon={<IconUpload />}>
                  上傳
                </Button>
              </Center>
            </Grid.Col>

            {formik.errors.fileUpload && (
              <Grid.Col xs={5} sm={5} md={5} lg={5} mt={10}>
                <AlertMessage message="請先選取檔案" />
              </Grid.Col>
            )}
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default GlossAdderForm;
