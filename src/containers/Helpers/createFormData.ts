function createFormData(files: FormData | [], token: string) {
  const fileKeys = Object.entries(files);
  const formData = new FormData();

  for (let [index, file] of fileKeys) {
    formData.append(`${token}-${index}-${file.name}`, file);
  }

  formData.append("token", token);

  return formData;
}

export default createFormData;
