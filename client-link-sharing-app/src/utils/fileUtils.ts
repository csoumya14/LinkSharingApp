// Helper function to convert file to fileList
export const createFileList = (file: File): FileList => {
  const dataTransfer = new DataTransfer();
  dataTransfer.items.add(file);
  return dataTransfer.files; // Returns a valid FileList
};
