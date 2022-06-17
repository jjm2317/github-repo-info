# 실행 방법

**1. clone repository**

```bash
git clone https://github.com/jjm2317/github-repo-info.git
```

**2. install and start**

```bash
npm install
npm start
```

## 6/17 ~

- repository 를 등록해도 업데이트가 안되는 문제(새로고침 후 업데이트)

  - 해결 commit: 43c0b854e43afa91d4c30238b7b7de33f41ba03c
  - 원인: repository list 를 두개의 state로 관리
  - 해결: 상위 컴포넌트에서 하나의 state로 사용
