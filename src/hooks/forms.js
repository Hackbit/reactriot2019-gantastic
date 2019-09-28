import { useState } from 'react';


export const useFileInputUpload = (onUpload) => {
  const [files, setFiles] = useState([]);
  const [uploads, setUploads] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);

  const handleChange = async (evt) => {
    const fileList = Array.from(evt.target.files);
    setFiles(fileList);

    const results = await onUpload(fileList);
    setImageUrls(results);

    setUploads(fileList.map(file => file.name));
  };

  return {
    handleChange,
    files,
    uploads,
    imageUrls,
  };
};
