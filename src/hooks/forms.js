import _diffBy from 'lodash/differenceBy';
import { useState } from 'react';


export const useFileInputUpload = (onUpload) => {
  const [files, setFiles] = useState([]);
  const [uploads, setUploads] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const handleChange = async (evt) => {
    const addedFiles = _diffBy(Array.from(evt.target.files), files, f => f.name);

    const fileList = files.concat(addedFiles);
    setFiles(fileList);

    const results = await onUpload(addedFiles);

    setImageUrls(imageUrls.concat(results));
    setUploads(fileList.map(file => file.name));
  };

  return {
    handleChange,
    files,
    uploads,
    imageUrls,
  };
};
