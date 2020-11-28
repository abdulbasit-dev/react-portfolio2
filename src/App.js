import {useEffect, useState} from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import MyProject from './components/MyProject';
import Skills from './components/Skills';

import dataFile from './data.json';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(dataFile);
  }, []);

  return (
    <div className='app'>
      {data && (
        <>
          <Header data={dataFile} />
          <Hero data={dataFile} />
          <AboutMe data={dataFile} />
          <Skills data={dataFile} />
          <MyProject data={dataFile} />
          <Footer data={dataFile} />
        </>
      )}
    </div>
  );
}

export default App;
