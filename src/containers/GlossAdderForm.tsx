import { useState } from "react";
import * as Yup from "yup";
import { IconUpload } from "@tabler/icons";
import SelectedFiles from "./SelectedFiles";
import { FormValueType } from "src/typings";
import { options } from "./Options/options";
import { FormikController } from "@components/index";
import { Formik, Form, FormikHelpers } from "formik";
import createFormData from "./Helpers/createFormData";
import { Title, Grid, Button, Center } from "@mantine/core";
import uploadGlossFile from "src/services/uploadGlossFile";

let TIMESTAMP = new Date().getTime().toString();

function GlossAdderForm() {
  const [uploadPercentage, setUploadPercentage] = useState(0);

  console.log(uploadPercentage)

  const initialValues: FormValueType = {
    fileUpload: [],
    cliticOption: "",
  };

  const validationSchema = Yup.object({
    fileUpload: Yup.array().min(1, "請先選檔案！"),
    cliticOption: Yup.string().required("請選擇是否分開人稱代名詞"),
  });

  const onSubmit = async (
    values: FormValueType,
    actions: FormikHelpers<FormValueType>
  ) => {
    const { fileUpload, cliticOption } = values;

    const formData = createFormData(fileUpload, TIMESTAMP);

    const [result, error] = await uploadGlossFile(
      formData,
      setUploadPercentage
    );
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

            <Grid.Col xs={5} sm={5} md={5} lg={5} mt={10}>
              <FormikController
                control="select"
                placeholder="人稱格式"
                name="cliticOption"
                options={options}
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
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default GlossAdderForm;
