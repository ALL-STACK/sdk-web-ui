import React from 'react';

const styles = require('./index.less');

export default ({children}: {children?: React.ReactNode}) => {
  return (
    <div className={styles.body}>
      {children}
    </div>
  );
}
