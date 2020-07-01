import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import PDFReader from 'rn-pdf-reader-js';

const Rule = () => {
  const [champ, setChamp] = useState({});

  useEffect(() => {
    async function loadChamp() {
      const response = await api.get('/champ/current');
      setChamp(response.data);
    }

    loadChamp();
  }, []);

  return (
    <PDFReader
      source={{
        uri: `https://rb-calcio.herokuapp.com/files/rules/rule-${champ.season}.pdf`,
      }}
    />
  );
};

export default Rule;
