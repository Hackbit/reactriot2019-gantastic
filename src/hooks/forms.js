import _diffBy from 'lodash/differenceBy';
import { useState } from 'react';


export const useFileInputUpload = (onUpload, onDelete) => {
  const [files, setFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [uploads, setUploads] = useState([]);

  const handleChange = async (evt) => {
    const addedFiles = _diffBy(Array.from(evt.target.files), files, f => f.name);

    const fileList = files.concat(addedFiles);
    setFiles(fileList);

    const results = await onUpload(addedFiles);

    setImageUrls(imageUrls.concat(results));
    setUploads(fileList.map(file => file.name));
  };

  const handleDelete = async (url, fileName) => {
    const result = await onDelete(url);
    if (result) {
      const filteredFiles = files.filter(f => f.name !== fileName);
      const filteredUrls = imageUrls.filter(u => u !== url);
      const filteredUploads = uploads.filter(upload => upload !== fileName);
      setFiles(filteredFiles);
      setImageUrls(filteredUrls);
      setUploads(filteredUploads);
    }
  };

  const handleReset = () => {
    setFiles([]);
    setImageUrls([]);
    setUploads([]);
  };

  return {
    files,
    handleChange,
    handleDelete,
    handleReset,
    imageUrls,
    uploads,
  };
};
