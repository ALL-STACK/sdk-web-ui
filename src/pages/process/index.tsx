import React from 'react';
import { Steps } from 'antd-mobile';
import NavBar from '@/components/NavBar';
import BodyWrapper from '@/components/BodyWrapper';
import Card from '@/components/Card';

const { Step } = Steps;

const styles = require('./index.less');

export default () => { 

  const customIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" className="am-icon am-icon-md">
      <g fillRule="evenodd" stroke="transparent" strokeWidth="4">
        <path d="M21 0C9.402 0 0 9.402 0 21c0 11.6 9.402 21 21 21s21-9.4 21-21C42 9.402 32.598 0 21 0z" />
        <path fill="#FFF" d="M29 18.73c0-.55-.447-1-1-1H23.36l4.428-5.05c.407-.46.407-1.208 0-1.668-.407-.46-1.068-.46-1.476 0l-5.21 5.89-5.21-5.89c-.406-.46-1.067-.46-1.475 0-.406.46-.406 1.207 0 1.667l4.43 5.05H14.23c-.55 0-.998.45-.998 1 0 .554.448.97 1 .97h5.9v3.942h-5.9c-.552 0-1 .448-1 1s.448.985 1 .985h5.9v4.896c0 .552.448 1 1 1 .55 0 .968-.284.968-.836v-5.06H28c.553 0 1-.433 1-.985s-.447-1-1-1h-5.9v-3.94H28c.553 0 1-.418 1-.97z" />
      </g>
    </svg>
  );

  function renderStep() {
    const arr  = ['认证', '写卡', '激活'];
    return (
      <div style={{marginTop: 24}}>
        {
          arr.map((item, index) => (
            <div style={{display: 'flex', justifyContent: 'flex-start'}} key={index} className={styles.step}>
              <div className={styles.left}>
                <div className={styles.svg}>
                  <img src={require('@/assets/circle-green.svg')} alt="" />
                </div>
              </div>
              <div className={styles.right} style={{borderLeft: `2.5px ${index === arr.length - 1 ? '#FFF' : '#EBEBEE'} solid`}}>
                <div className={styles.wrapper}>
                  <div className={styles.box}>
                    <div className={styles['step-title']}>认证</div>
                    <div className={styles['step-error']}>错误：501</div>
                    <div className={styles['step-desc']}>2019-11-20 12:44:01</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }

  return (
    <BodyWrapper>
      <NavBar title='操作记录' showIcon />
      <Card>
        <div className={styles.title}>
          <div className={styles.orderNum}>订单号：SC20203T191126000000090</div>
          <div className={styles.status}>订单完成</div>
        </div>
        {renderStep()}
      </Card>
    </BodyWrapper>
  );
}
