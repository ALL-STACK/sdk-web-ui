import React from 'react';
import { WingBlank } from 'antd-mobile';

const styles = require('./index.less');

export default ({children, style}: {children?: React.ReactNode, style?: any}) => {
  return (
    <WingBlank className={styles.card} style={style}>
      {children}
    </WingBlank>
  );

}
