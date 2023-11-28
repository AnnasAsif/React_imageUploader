import React, { useState } from 'react';

const ImageUpload = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    // console.log(selectedImages);
    setImages(selectedImages);
  };

  const handleUpload = () => {
    const formData = new FormData();

    for (let i = 0; i < images.length; i++) {
        formData.append(`images`, images[i]);
        console.log(images[i]);
        console.log(formData);
      }

    // Send formData to backend using fetch or Axios
    // Example:
    fetch('http://172.16.0.94:9001/api/templates/temporary', {
      method: 'POST',
      body: formData,
    })
    .then(response => {
       // Handle response
    })
    .catch(error => {
       // Handle error
    });
  };

  return (
    <div>
      <input type="file" accept="image/*" multiple onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUpload;
