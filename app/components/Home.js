// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import sharp from 'sharp';
import routes from '../constants/routes.json';
import styles from './Home.css';

const imagePath =
  '/Users/georgiyanev/Projects/FEEDBACK FROM ANTTI/SOLVED/MANY WORKING SETS/C246_P272378_SS/246_P272378_G-2.JPG';

const Home = () => {
  const [image, setImageData] = React.useState({});

  React.useEffect(() => {
    try {
      // eslint-disable-next-line promise/catch-or-return
      sharp(imagePath)
        .metadata()
        .then(data => {
          console.log(data);
          setImageData(data);
          return data;
        });
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  return (
    <div className={styles.container} data-tid="container">
      <h2>Home</h2>
      <Link to={routes.COUNTER}>to Counter</Link>
      <p>{sharp ? 'Sharp is running' : 'Sharp is not running'}</p>
      <div>Reading image: {imagePath}</div>
      <div>Image format: {image.format}</div>
      <div>Image width: {image.width}</div>
      <div>Image height: {image.height}</div>
    </div>
  );
};

export default Home;
