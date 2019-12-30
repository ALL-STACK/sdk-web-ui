import React, { useState, useEffect } from 'react';
import { Modal, Button, WingBlank } from 'antd-mobile';
import NavBar from '@/components/NavBar';
import BodyWrapper from '@/components/BodyWrapper';
import Card from '@/components/Card';
import BottomBtn from '@/components/BottomBtn';
import { primaryColor } from '@/theme';

const styles = require('./index.less');
const MAX = 463.65;

let i = 0;
export default () => {
  const [visible, setVisible] = useState(false);
  const [tweenData, setPercent] = useState(4.6365);
  const [curIndex, setCurIndex] = useState(2);

  useEffect(() => {
    if(curIndex === 3) {
      const timer = setInterval(() => {
        i++;
        setPercent(MAX*i/10);
        if(i > 10) {
          i = 0;
          clearInterval(timer);
          setCurIndex(4);
        }
      }, 500);
    }
  }, [curIndex])

  function handleClick() {
    // const data = dataStartArr[i];
    // setPercent(data);
    i++;
    i = i > 10 ? 0 : i;
    setPercent(MAX*i/10);
  }

  function mySvg() {
    return (
      <svg width="152px" height="152px" viewBox="0 0 152 152" version="1.1" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
        <g id="写白卡" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="激活-默认" transform="translate(-111.000000, -209.000000)">
                <g id="编组-2" transform="translate(112.000000, 210.000000)">
                    <g id="Progress">
                        <circle id="Oval-2" stroke="#FFFFFF" fill="#F6F7FB" cx="75.5" cy="75.5" r="71.5"></circle>
                        <g id="Oval-5" stroke="#9BA6E7" strokeLinecap="round" strokeWidth="2" strokeDasharray={`${tweenData}px, 463.65px`}>
                          <path className={styles.path} d="M67.4043042,0.379877294 C29.5502656,4.18708886 0,36.1426273 0,75 C0,116.421356 33.5786438,150 75,150 L75,150 C116.421356,150 150,116.421356 150,75 C150,33.5786438 116.421356,0 75,0" id="路径"></path>
                        </g>
                    </g>
                    <g id="sim_card" transform="translate(37.000000, 24.000000)" fillRule="nonzero">
                      <path d="M68.25,102 L9.74999997,102 C4.3875,102 0,97.6285714 0,92.2857143 L0,9.71428568 C0,4.37142857 4.3875,0 9.74999997,0 L49.48125,0 C52.1625,0 54.6,0.971428533 56.3062501,2.91428571 L75.075,21.6142858 C77.025,23.5571429 78,25.9857143 78,28.4142857 L78,92.2857143 C78,97.6285714 73.6125,102 68.25,102 Z" id="路径" fill="#9BA6E7"></path>
                      <path d="M59.1000001,82 L19.8999999,82 C17.2049999,82 15,79.80625 15,77.125 L15,47.875 C15,45.19375 17.205,43 19.8999999,43 L59.1000001,43 C61.7950001,43 64,45.19375 64,47.875 L64,77.125 C64,79.80625 61.795,82 59.1000001,82 Z" id="路径" fill="#FFBA48"></path>
                      <path d="M51.7500001,62.5 L51.7500001,69.8125 L64,69.8125 L64,74.6875 L51.7500001,74.6875 L51.7500001,82 L46.85,82 L46.85,43 L51.7500001,43 L51.7500001,57.625 L64,57.625 L64,62.5 L51.7500001,62.5 Z M15,60.0625 L15,64.9375 L27.2499999,64.9375 L27.2499999,69.8125 L15,69.8125 L15,74.6875 L27.2499999,74.6875 L27.2499999,82 L32.15,82 L32.15,60.0625 L15,60.0625 L15,60.0625 Z" id="形状" fillOpacity="0.63947771" fill="#FFE161"></path>
                    </g>
                </g>
            </g>
        </g>
      </svg>
    )
  }

  function handleWriteCard() {
    setCurIndex(curIndex+1);
  }

  function renderUserInfo() {
    const arr = [{name: '激活姓名', value: '朱杰'},{name: '激活号码', value: '13600000000'}]
    return arr.map((item, index) => (
      <div className={index === arr.length - 1 ? `${styles['demo1']}` : `${styles['demo1']} ${styles['demo2']}`} key={index}>
        <div className={styles.name}>{item.name || ''}</div>
        <div className={styles.value}>{item.value || ''}</div>
      </div>
    ))
  }

  return (
    <BodyWrapper>
      <NavBar title={curIndex === 3 || curIndex === 4 ? '激活' : '写卡'} showIcon />
      <div className={styles.steps}>
        <img src={curIndex === 2 ? require('@/assets/step2.svg') : curIndex === 3 ? require('@/assets/step3.svg') : curIndex === 4 ? require('@/assets/step4.svg') : require('@/assets/step2.svg')} alt=""/>
      </div>
      {
        curIndex === 2 ? (
          <React.Fragment>
            <Card>
            <div className={styles.title}>
              <div className={styles.equipment}>写卡设备</div>
              <div className={styles.right}>
                <span style={{paddingRight:12}}>A1002987-09112-0023</span>
                {/* <div className={styles['conn-failed']}>
                  <img src={require('@/assets/warning.svg')} alt=""/>
                  <span style={{paddingLeft:6}}>连接失败</span>
                </div> */}
                <img src={require('@/assets/refresh.svg')} alt=""/>
              </div>
            </div>
            <div className={styles['svg-wrapper']}>
              <img src={require('@/assets/reader.svg')} alt=""/>
            </div>
            <div className={styles.tips}>将卡板插入阅读器写卡插口，然后点击确认写卡</div>
          </Card>
          <BottomBtn title="确认写卡" onClick={handleWriteCard}/>
          </React.Fragment>
        ) : null
      }
      {
        curIndex === 3 ? (
          <Card>
            <div className={styles['activate-progress']}>
              <div className={styles['svg']}>
                {mySvg()}
              </div>
              <div className={styles['txt']}>号码激活中...</div>
            </div>
            <div>
              {renderUserInfo()}
            </div>
          </Card>
        ) : null
      }
      {
        curIndex === 4 ? (
          <React.Fragment>
            <Card>
              <div className={styles['activate-success']}>
                <img src={require("@/assets/success.svg")} alt=""/>
                <div style={{marginLeft: 12}}>
                  <span>激活成功</span>
                </div>
              </div>
              <div className={styles['success-time']}>
                <span>激活时间：2019-11-11 23:09:44</span>
              </div>
            </Card>
          <Card>
            {renderUserInfo()}
          </Card>
          <BottomBtn title="返回主页" onClick={() => {}}/>
          </React.Fragment>
        ) : null
      }
      <Modal
        popup
        visible={visible}
        onClose={() => setVisible(false)}
        animationType="slide-up"
        className={styles.modal}
      >
        <div style={{textAlign: 'center'}}>
          <img src={require('@/assets/modal-top.svg')} alt=""/>
        </div>
        <WingBlank style={{padding: '24px 0'}}>
          <div className={styles['modal-content']}>
            <div className={styles['modal-status']}><span>读卡错误</span></div>
            <div className={styles['modal-desc']}><span>请重新插入卡片</span></div>
          </div>
          <Button 
            activeStyle={{backgroundColor: '#d5890c'}}
            style={{backgroundColor: primaryColor, color: '#fff', margin: '0 12px'}}
          >
            确定
          </Button>
        </WingBlank>
      </Modal>
    </BodyWrapper>
  );
}
