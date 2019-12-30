import React from 'react';
import { Button, WingBlank } from 'antd-mobile';
import { primaryColor } from '@/theme';

const styles = require('./index.less');

export default ({title, onClick, disabled}: {title?: string, onClick?: any, disabled?: boolean}) => {

  function handleClick() {

  }

  return (
    <div className={styles.button}>
      <Button 
        activeStyle={{backgroundColor: '#d5890c'}}
        style={{backgroundColor: primaryColor, color: '#fff'}}
        onClick={onClick || handleClick}
        disabled={disabled}
      >
        {title || ''}
      </Button>
    </div>
  );
}
