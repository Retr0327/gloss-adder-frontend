import { useState } from "react";
import * as Yup from "yup";
import {
  FormikController,
  ProgressBar,
  SelectedFiles,
  ButtonController,
} from "@components/index";
import { FormValueType } from "types";
import { useRouter } from "next/router";
import { options } from "./Options/options";
import { uploadGlossFile } from "src/services";
import { DISABLED } from "src/stores/constants";
import { Title, Grid, Center } from "@mantine/core";
import { Formik, Form, FormikHelpers } from "formik";
import createFormData from "./Helpers/createFormData";
import { useDropZone } from "src/context/DropZoneContext";

let TIMESTAMP = new Date().getTime().toString();

function GlossAdderForm() {
  const router = useRouter();
  const { dispatch } = useDropZone();
  const [process, setProcess] = useState("upload");
  const [uploadPercentage, setUploadPercentage] = useState(0);

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

    const formData = createFormData(fileUpload, TIMESTAMP, cliticOption);

    const [result, error] = await uploadGlossFile(
      formData,
      setUploadPercentage
    );

    setTimeout(() => setUploadPercentage(0), 2000);

    if (error) {
      return alert("Oops! Something went wrong!");
    }

    switch (result.data.status) {
      case "failed":
        return alert("Oops! Something went wrong!");
      default:
        dispatch({ type: DISABLED });
        router.push(
          `?token=${result.data.token}&firstFileName=${result.data.firstFileName}`
        );
        setProcess("download");
        return actions.setSubmitting(false);
    }
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

            <Grid.Col xs={12} sm={12} md={12} lg={10} mt={10}>
              <ProgressBar percentage={uploadPercentage} />
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
                <ButtonController control={process} />
              </Center>
            </Grid.Col>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default GlossAdderForm;
