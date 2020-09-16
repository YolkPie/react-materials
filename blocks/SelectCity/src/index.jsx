import React from 'react';
import IceContainer from '@icedesign/container';
import  './index.scss';

const areaList = [
  {
    areaId: 1001,
    areaName: '北京'
  },
  {
    areaId: 1002,
    areaName: '广东'
  },
  {
    areaId: 1003,
    areaName: '西安'
  },
  {
    areaId: 1004,
    areaName: '成都'
  }
];

export default function SelectCity() {
  return (
    <IceContainer
      className='nl'
    >
      <div className='SelectCity-citys'>
        {areaList.map((val, i) => {
            return (
              <span
                key={i}
                className={`city-name ${1001 === val.areaId ? 'cur' : ''}`}
              >
                  {val.areaName}
                </span>
            );

        })}
      </div>
    </IceContainer>
  );
}
