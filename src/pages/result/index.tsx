import React, { useState, useEffect } from 'react';
import { List } from 'antd-mobile';
import router from 'umi/router';
import NavBar from '@/components/NavBar';
import BodyWrapper from '@/components/BodyWrapper';
import BottomBtn from '@/components/BottomBtn';
import Card from '@/components/Card';
import qs from 'querystring';
import { primaryColor } from '@/theme';

const { Item } = List;

const styles = require('./index.less');

export default () => {
  const [type] = useState(qs.parse(window.location.href.split('?')[1]).type || 1);

  useEffect(()=> {
    const rootEl = document.getElementById('root');
    if(type === '1') {
      if(rootEl) {
        rootEl.style.backgroundColor = "#fff";
      }
    }
    return () => {
      if(rootEl) {
        rootEl.style.backgroundColor = "#F6F7FB";
      }
    }
  });

  function handleClick() {
    router.push('/');
  }

  function renderUserInfo() {
    const arr = [{name: '激活姓名', value: '朱杰'},{name: '激活号码', value: '13600000000'},{name: '联系电话', value: '18244129999'},{name: '订单时间', value: '2019-11-30 12:33:33'}]
    return arr.map((item, index) => (
      <div className={index === arr.length - 1 ? `${styles['demo1']}` : `${styles['demo1']} ${styles['demo2']}`} key={index}>
        <div className={styles.name}>{item.name || ''}</div>
        <div className={styles.value}>{item.value || ''}</div>
      </div>
    ))
  }

  return (
    <BodyWrapper>
      <NavBar title='查询结果' showIcon showRightContent />
      {
        type !== '1' ? (
          <React.Fragment>
            <Card>
              {
                type === '2' ? (
                  <div className={styles.result}>
                    <div style={{textAlign: 'center'}}>
                      <img src={require('@/assets/cancelOrder.svg')} alt="" />
                      <div className={styles['status-name']}>订单已取消</div>
                    </div>
                  </div>
                ) : null
              }
              {
                type === '3' ? (
                  <div className={styles.result}>
                    <div style={{textAlign: 'center'}}>
                      <img src={require('@/assets/activateSuccess.svg')} alt="" />
                      <div className={styles['status-name']}>号码激活成功</div>
                      <div className={styles['activate-time']}>激活时间：2019.11.11 23:09:12</div>
                    </div>
                  </div>
                ) : null
              }
              <div className={styles['demo1']}>
                <div className={styles.name}>订单号</div>
                <div className={styles.value}>SC20203T191126000000090</div>
              </div>
            </Card>
            <Card>{renderUserInfo()}</Card>
          </React.Fragment>
        ) : null
      }
      {
        type === '1' ? (
          <React.Fragment>
            <div className={styles['not-support']}>
              <img src={require('@/assets/wrong-page.svg')} alt=""/>
              <div className={styles.blank} />
              <span>非本物流商订单，不支持操作</span>
            </div>
            <BottomBtn title="返回主页" onClick={handleClick}/>
          </React.Fragment>
        ) : null
      }
    </BodyWrapper>
  );
}
