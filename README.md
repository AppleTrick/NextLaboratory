# Next.js 실험실

## 목적

Next.js 에서 사용할 수 있는 기능, 외부라이브러리, 내가 만든 컴포넌트 방법들 정리하는 곳!

## 기본 설치

```bash
    yarn create next-app --typescript
```

## three.js 설치

```bash
    yarn add @types/three --dev
    yarn add three
```

## react-markdown-editor-lite

```bash
yarn add @next/mdx @mdx-js/loader @mdx-js/react
yarn add --dev @types/mdx
```
- **`@next/mdx`**: Next.js에서 MDX를 지원하기 위한 공식 패키지
- **`@mdx-js/loader`**: MDX 문서를 컴파일하는 Webpack 로더
- **`@mdx-js/react`**: MDX 문서 내에서 React 컴포넌트를 사용하기 위한 기능을 제공
- **`@types/mdx`**: TypeScript 프로젝트에서 MDX 파일에 대한 타입 지원을 제공


## 🖍️ 마크다운 코드 하이라이팅 수정

```bash
yarn add remark-gfm
```
remark-gfm 은 코드 좀더 다채롭게 표현해줌

### 코드하이라이팅 선택 1 

``` bash
yarn add rehype-highlight prismjs
```

### 코드하이라이팅 선택 2
```bash
yarn add react-syntax-highlighter
yarn add @types/react-syntax-highlighte
```