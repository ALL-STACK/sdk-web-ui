import React, { useState } from 'react';
import { WingBlank } from 'antd-mobile';
import router from 'umi/router';
import NavBar from '@/components/NavBar';
import BodyWrapper from '@/components/BodyWrapper';
import { primaryColor } from '@/theme';

const styles = require('./index.less');

export default () => {
  const [color, setColor] = useState(primaryColor);
  const [curIndex, setIndex] = useState(null);

  function handleOrderTouchStart(index?: any) {
    setIndex(index);
  }

  function handleOrderTouchEnd(index: number) {
    if(!((index+1)%4)) {
      router.push('/activate')
    }else {
      router.push(`/result?type=${index%4+1}`)
    }
    setIndex(null);
    setColor(primaryColor);
  }

  function renderList() {
    const list = ['SC20203T191126000000090', 'SC20203T191126000000090', 'SC20203T191126000000090', 'SC20203T191126000000090'];
    return list.map((item, i) => (
      <div 
        key={i} 
        style={{color: curIndex === i ? '#fff' : color, backgroundColor: curIndex === i ? primaryColor : '#F5A62317'}} 
        className={styles['order-item']} 
        // onTouchStart={() => handleOrderTouchStart(i)}
        // onTouchEnd={() => handleOrderTouchEnd(i)}
        onClick={() => handleOrderTouchEnd(i)}
      >
        {item}
      </div>
    ))
  }

  return (
    <BodyWrapper>
      <NavBar title='订单列表' />
      <WingBlank className={styles['list-wrapper']}>
        {renderList()}
      </WingBlank>
    </BodyWrapper>
  );
}
