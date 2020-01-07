// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import sharp from 'sharp';
import routes from '../constants/routes.json';
import styles from './Home.css';

// type Props = {};

// const imagePath =
//   '/Users/georgiyanev/Projects/FEEDBACK FROM ANTTI/IMAGES-ARE-MISSING-THUMBNAILS/P130351/C73_P103351_G-1.JPG';

const Home = () => {
  // const [counter, setCounter] = React.useState('');

  // React.useEffect(() => {
  //   const image = sharp(imagePath)
  //     .metadata()
  //     .then(data => {
  //       console.log(data);
  //       setCounter(data.format);
  //       return data;
  //     });

  //   console.log(image);
  // }, []);

  return (
    <div className={styles.container} data-tid="container">
      <h2>Home</h2>
      <Link to={routes.COUNTER}>to Counter</Link>
      {/* <p>{counter}</p> */}
      <p>{sharp ? 'Sharp is running' : 'Sharp is not running'}</p>
    </div>
  );
};

export default Home;
