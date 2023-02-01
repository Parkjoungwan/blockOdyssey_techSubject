# 배경

프론트엔드 개발자 코딩테스트를 위한 기술과제를 받았습니다.

과제는 쇼핑몰에서 사용할 관리자 페이지 구현이었으며, 기술 스택으로는 다음을 사용합니다. 

- React
- React-Query
- Redux-toolkit

관리 물품을 페이지네이션을 통해 표시해야 하며, 한 페이지에 출력할 물품 갯수는 선택상자를 통해 선택할 수 있습니다. 그리고 검색 기능을 제공하며, 조건 검색이 가능해야 합니다.

# 파일구조

```markdown
src
├── App.tsx
├── index.tsx
├── react-app-env.d.ts
├── component
│   ├── admin
│   │   ├── ProductList.tsx
│   │   ├── index.tsx
│   │   └── views
│   │       └── ProductListView.tsx
│   └── common
├── lib
│   ├── apis
│   │   └── adminAPI.ts
│   └── customAxios
│       └── customAxios.ts
├── mutation
│   └── admin
│       └── useProductList.tsx
├── pages
│   ├── Index.tsx
│   └── admin
│       └── Admin.tsx
├── router
│   └── router.tsx
├── styles
│   └── admin
│       └── ProductListView.css
└── tests
    ├── App.test.tsx
    └── setupTests.ts
```

# 실행방법

- npm 또는 yarn이 없다면 설치해주세요.

```markdown
- npm start
- yarn start
[둘 중 하나로 실행시켜주세요.]
```

# 실행예시

# 고민한 부분

# 기간

23.01.31 ~ 23.02.02(7시까지 제출)