import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@mui/material';
import { Field, useField } from 'formik';
import s from './FileUploader.module.css';

const types = ['image/png', 'image/jpeg', 'image/jpg'];
const allowedFormats = '.png, .jpg, .jpeg';

function FileUploader({ setFile, name }) {
  const [{ value, onChange: defaultHandleChange }] = useField(name);
  const [error, setError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const fileInputRef = useRef(null);
  const imageRef = useRef(null);

  const handleClick = () => {
    if (fileInputRef) {
      fileInputRef.current.click();
    }
  };

  const handleChange = (e) => {
    defaultHandleChange(e);
    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    if (selectedFile) {
      if (types.includes(selectedFile.type)) {
        setError(null);
        setFile(selectedFile);

        const reader = new FileReader();

        reader.onload = (event) => {
          imageRef.current.src = event.target.result;
        };

        reader.readAsDataURL(selectedFile);
      } else {
        setFile(null);
        setError('Please select an image file (png or jpg)');
      }
    }
  }, [selectedFile, setFile]);

  return (
    <div className={s.file_uploader}>
      <div className={s.title_block}>
        <Button variant="outlined" onClick={() => handleClick()}>
          {value ? 'Choose another photo' : 'Choose your photo'}
        </Button>
        <p className={s.description}>
          This image will be displayed in your profile
        </p>
      </div>
      <div>
        <Field
          name="photo"
          id="photo"
          accept={allowedFormats}
          type="file"
          innerRef={fileInputRef}
          hidden
          onChange={handleChange}
        />
        {error && <p>{error}</p>}
        {value && selectedFile && (
          <div className={s.image_preview_block}>
            <img src="" alt="Preview" ref={imageRef} />
          </div>
        )}
      </div>
    </div>
  );
}

export default FileUploader;
