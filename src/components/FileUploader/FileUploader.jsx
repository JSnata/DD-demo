import React, { useState, useRef, useEffect} from 'react';
import useUpdateStorage from '../../custom-hooks/useUpdateStorage';
import s from './FileUploader.module.css';
import SecondaryButton from '../../UI/Buttons/SecondaryButton';
import useUpdateUser from '../../custom-hooks/useUpdateUser';
import useAuthContext from '../../custom-hooks/useAuthContext';

function FileUploader({ category, id, setFile }) {

  const [error, setError] = useState(null);
  const { user } = useAuthContext();
  const { updateUser } = useUpdateUser();

  const ref = useRef(null);
  const types = ['image/png', 'image/jpeg', 'image/jpg'];

  const handleClick = () => {
    if (ref) {
      ref.current.click();
    }
  };

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      if (types.includes(selectedFile.type)) {
        setError(null);
        setFile(selectedFile);
      } else {
        setFile(null);
        setError('Please select an image file (png or jpg)');
      }
    }
  };

//   useEffect(() => {
//     updateUser(user, { imgUrl: url });
//   }, [url]);

  return (
    <div className={s.file_uploader}>
      <p className={s.description}>This will be displayed in your profile</p>
      <SecondaryButton clickHandler={() => handleClick()}>
        Choose your photo
      </SecondaryButton>
      <input
        name="photo"
        accept=".png, .jpg, .jpeg"
        id="photo"
        type="file"
        ref={ref}
        hidden
        onChange={handleChange}
      />
      {error && <p>{error}</p>}
    </div>
  );
}

export default FileUploader;
