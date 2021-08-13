# React 공부 시 참고해야 할 5가지

## SPA (single page application)

- SPA가 생겨나면서 **React.js , Angular, Vue**가 큰 주목을 받고 있다.
- 그중 Facebook이 제공하는 오픈 소스 라이브러리 React는 현업에서 가장 많이 사용하고 있고, 기존 Javascript 개발자드르이 큰 생산성 향상에 기여하고 있다.

> SPA 란 ?

- 차세대 패러다임
- 단일 페이지 어플리케이션은 브라우저에 로드되고 난 뒤에 페이지 전체를 서버에 요청하는 것이 아니라 최초 한번 페이지 로딩 후 이후부턴 데이터만 변경해서 사용할 수 있는 Web Applcation
- React는 `프레임워크`가 아닌 **라이브러리**이기 때문에 규모가 커질 수록 신경써야하는 부분들이 많아져 난이도가 급 상승한다.

## 1. ES5 문법과 Javascript Immutability를 이해하고 시작하자.

- React의 props , state 개념은 위 내용을 빼 놓고 설명할 수 없다. JS Immutablity에 대한 이해 없이 React를 접한다면 험난한 여정이 예상된다.

## 2. React는 책 대신 공식 문서로 시작하자

- React 만큼은 공식 관련 문서와 tutorial를 직접 진행하고 관련 자료들을 찾아보면서 직접 적용하는 방식으로 공부하는 것을 가장 추천 !

- 공식 문서: https://reactjs.org/docs/getting-started.html

## 3. React 관련 구글링 시 지난 1년 이내로 설정 후 검색하자.

## 4. Simple하게 가자.

- 처음에는 CRA(create react app)을 통해 간단한 앱을 만든다.
- 간단히 만든 앱에 Redux를 적용하고 그 앱에 React-Redux를 적용
- 완전히 이해가 될 때까지 **기본 앱 → Redux → React-Reudx**를 반복
- 이외에도 SEO, SSR, CSS의 부품화 등 React를 활용할 수 있는 방법들은 매우 다양하다
- 작은 걸로 계속 규모를 조금씩 키워나가는 것을 추천

## 5. 라이브러리 적용이 생각대로 안된다면 최근 관련 issue가 있었는지 확인하자.

- React의 출시 이후 지금과 같이 상용화 되기까지 그리 길지 않은 시간이 걸렸다. 지금까지도 조금씩 업데이트 되고 꾸준히 발전하고 있으므로 프로젝트 진행 시 생각과 다른 문제가 발생하는 부분이 있다면 관련 구글링 또는 github 히스토리 탐색을 통해 해답을 찾자.

### 공부 자료

- Velopert님 블로그 : https://velopert.com/3613
- egoing 님의 opentutorial 생활 코딩 강좌(Redux, React-Redux) : https://opentutorials.org/module/4078
- 나동빈 님의 블로그 : https://ndb796.tistory.com/211

### 출처 : https://geniee.tistory.com/9
