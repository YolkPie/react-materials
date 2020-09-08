# LotteryFloor

## 简介：抽奖活动组件
![截图](https://img13.360buyimg.com/imagetools/jfs/t1/120729/24/10868/343388/5f45d2cfE8abf990d/8273780a0eb162f9.jpg)
项目地址：https://git.jd.com/nb-fe/flower-qixi.git

使用方式：
1. 克隆抽奖楼层组件到当前项目下, 如名为：LotteryFloor
```bash
git clone git@git.jd.com:nb-fe/flower-qixi.git LotteryFloor
```
2. 项目中直接使用该组件（传参详见项目README）
```javascript
import LotteryFloor from '@component/LotteryFloor'

const App = () => (
  <LotteryFloor
    activityId={flowerActivityId}
    appId={flowerActivityAppId}
    hotTime={flowerHotTime}
  />
)
```




