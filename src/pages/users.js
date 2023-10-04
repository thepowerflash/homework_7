import React from 'react';
// import './App.css';
import ImageSlider from './ImageSlider';

const images = [
  'https://blog.pshares.org/wp-content/uploads/sites/10/2012/02/dawn-dusk-hd-wallpaper-36717-1536x956.jpg',
  'https://i.pinimg.com/originals/05/da/83/05da8387a34b4b8dc4896287fe722451.jpg', 
  'https://i.pinimg.com/originals/ad/f6/e0/adf6e02072b43cbd099e9956354fe46c.jpg',
  'https://images2.alphacoders.com/712/712498.jpg',
  'https://wallpapers.com/images/featured/32k-ultra-hd-nature-cs8ebeqdko1lhdzp.jpg',
  'https://i.pinimg.com/originals/33/b1/e0/33b1e01e371bc01d11439686f7700b19.jpg',
  'https://wallpapers.com/images/featured/32k-ultra-hd-nature-cs8ebeqdko1lhdzp.jpg',
];

function App() {
  return (
    <div className="App">
      <h1>Красивые картиночки</h1>
      <ImageSlider images={images} />
    </div>
  );
}

export default App;