import React, { useState } from 'react';
import { NavBar, Icon, Popover } from 'antd-mobile';
import router from 'umi/router';

const styles = require('./index.less');

const { Item } = Popover;

interface IProps {
  title?: string,
  showIcon?: boolean,
  showRightContent?: boolean,
}
 
export default ({showIcon, showRightContent, title}: IProps) => {

  const [visible, setVisible] = useState(false);

  function onSelect(item: any) {
    setVisible(!visible);
    router.push('/process')
  }

  function handleBack() {
    window.history.back();
  }

  function renderPopover() {
    return (
      <Popover
        mask
        key="1"
        overlayClassName="fortest"
        overlayStyle={{ color: 'currentColor' }}
        visible={visible}
        overlay={[
          (<Item key="1" value="operate" data-seed="logId">操作记录</Item>),
        ]}
        align={{
          overflow: { adjustY: 0, adjustX: 0 },
          offset: [-10, 0],
        }}
        onVisibleChange={() => setVisible(!visible)}
        onSelect={onSelect}
      >
        <Icon type="ellipsis" className={styles.icon} />
      </Popover>
    )
  }

  return (
    <NavBar
      className={styles.navBar}
      mode="dark"
      icon={showIcon ? <Icon type="left" className={styles.icon} onClick={handleBack}/> : null}
      rightContent={showRightContent ? [
        renderPopover(),
      ] : []}
    >
      <span className={styles.title}>{title || ''}</span>
    </NavBar>
  )
}
