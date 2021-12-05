import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/Header'
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/post" element={<CommentBox />} />
        <Route path="/" element={<CommentList />} />
      </Routes>
    </>
  );
}

export default App;
