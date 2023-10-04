import React from "react";

const ImageWithHeader = () => {
  const images = [
    'https://sovetologcom.ru/wp-content/uploads/2014/news/news-DqFDW7vtVN.jpg'
  ];

  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '20px',
    },
    h1: {
      fontSize: '24px',
      marginBottom: '10px',
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
    },
  };

  return (
    <div style={styles.container}>
      <img src={images[0]} alt="Изображение" style={styles.img} />
    </div>
  );
};

export default ImageWithHeader;