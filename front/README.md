# React 배포

## dotenv

dotenv를 사용해서 source 코드를 수정하지 않고,
baseURL 을 바꿔아햠.

## Webpack

webpack4 -> webpack5 바뀌면서 생기는 문제

dotenv 같은 NodeJS에서 실행되는 코드는,
브라우저에서 실행되는 `Javascript` 가 실행되지 않음.

webpack4 에서는 예전에 기본적으로 설정이 되어있었지만.

webpack5 버전업이 되면서 기본설정으로 되지 않게되면서, 설정을 직접해줘야함.

`webpack` 모르면 마음대로 라이브러리 쓰기도 힘들다 이말!

그래서 웹팩에서 `폴리필(polyfill)` 설정해서 문제를 해결해야함.

> `폴리필(polyfill)` 이란?
> 웹 브라우저가 지원하지 않는 새로운 기능을 구현하기 위해,
> 기능을 추가하는 기능? 행위? 라고 합니다.
> 간단히 말해서 안되는걸 되게 해주는 그런것들~

react-app-rewired

```sh
npm install -D react-app-rewired
```
