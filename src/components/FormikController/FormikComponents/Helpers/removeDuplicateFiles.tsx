function removeDuplicateFiles(acceptedFiles: File[], uploadFile: File[]) {
  const allFiles = [...uploadFile];

  const allFileNames = allFiles.map((value) => value.name);

  for (let [index, acceptedFile] of acceptedFiles.entries()) {
    if (allFileNames.includes(acceptedFile.name)) {
      acceptedFiles.splice(index, 1);
    }
  }

  return acceptedFiles;
}

export default removeDuplicateFiles;
