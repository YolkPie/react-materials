import React from 'react'
import IceContainer from '@icedesign/container';
import LotterFloor from '../../LotteryFloor'

export default function EntryCard() {
  const flowerActivityId = window.flowerActivityId // 活动ID
  const flowerActivityAppId = window.flowerActivityAppId // AppId
  const flowerHotTime = window.flowerHotTime // 热期时间
  return (
    <IceContainer>
      <App
        activityId={flowerActivityId}
        appId={flowerActivityAppId}
        hotTime={flowerHotTime}
      />
    </IceContainer>
  );
}

