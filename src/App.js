import React, { useState } from "react";

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageData = {
        id: Date.now(),
        src: e.target.result
      };

      setImages([...images, imageData]);
    };

    reader.readAsDataURL(file);
  };

  const handleImageDelete = (id) => {
    const updatedImages = images.filter((image) => image.id !== id);
    setImages(updatedImages);
  };

  return (
    <div>
      <h2>Image Gallery</h2>
      <div>
        <input type="file" onChange={handleImageUpload} />
      </div>
      <div className="gallery">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt="Uploaded" />
            <button onClick={() => handleImageDelete(image.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
