function createFormData(
  files: FormData | [],
  token: string,
  cliticOption: string
) {
  const fileKeys = Object.entries(files);
  const formData = new FormData();

  for (let [index, file] of fileKeys) {
    formData.append(`${token}-${index}-${file.name}`, file);
  }

  formData.append("token", token);
  formData.append("cliticOption", cliticOption);

  return formData;
}

export default createFormData;
