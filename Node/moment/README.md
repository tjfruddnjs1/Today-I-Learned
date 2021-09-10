# moment.js

## 개요
- Javascript에서 날짜, 시간을 다루는 것은 번거롭다
- native date 메서드는 지저분하고 API는 일관성이 부족

## moment.js란 ?
- JavaScript에서 dates를 다루기 위한 API
- 이 API를 이용해 날짜, 시간을 분석, 검증, 조작, 표시 가능

```js
const moment = require('moment');
const today = moment();
console.log(today.format());
/* 현재 날짜 및 시간 표시 */
```