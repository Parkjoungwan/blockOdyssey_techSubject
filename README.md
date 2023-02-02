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
│   │   ├── types.tsx
│   │   └── views
│   │       └── ProductListView.tsx
│   └── common
├── lib
│   ├── apis
│   │   └── adminAPI.ts
│   └── customAxios
│       └── customAxiosAdmin.ts
├── pages
│   ├── Index.tsx
│   └── admin
│       └── Admin.tsx
├── query
│   └── admin
│       └── useProductList.tsx
├── router
│   └── router.tsx
├── store
│   ├── paginationSlice.ts
│   ├── searchSlice.ts
│   └── store.ts
├── styles
│   └── admin
│       └── ProductListView.css
├── tests
│   ├── App.test.tsx
│   └── setupTests.ts
└── utils
    └── types.ts
```

# 실행방법

- npm 또는 yarn이 없다면 설치해주세요.

```markdown
- npm start
- yarn start
[둘 중 하나로 실행시켜주세요.]
```

- 실행 후 [http://localhost:3000/](http://localhost:3000/)로 접속해주세요.

# 실행예시

- 어드민 페이지로 이동
    
![어드민 페이지 이동](https://user-images.githubusercontent.com/48785968/216260926-b709d247-8b4b-4b63-bd8e-8bffa3537edd.gif)

    
- 검색 조건 및 검색
    
    ![조건 변경 및 검색.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b82ce01c-ceb2-46af-9f2d-b9bdadd53a90/%E1%84%8C%E1%85%A9%E1%84%80%E1%85%A5%E1%86%AB_%E1%84%87%E1%85%A7%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC_%E1%84%86%E1%85%B5%E1%86%BE_%E1%84%80%E1%85%A5%E1%86%B7%E1%84%89%E1%85%A2%E1%86%A8.gif)
    
- 행 수 변경 및 페이지 네이션
    
    ![행 수 변경 및 페이지네이션.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fa3be2ce-4de7-461e-b92c-9b64ae24ebaa/%E1%84%92%E1%85%A2%E1%86%BC_%E1%84%89%E1%85%AE_%E1%84%87%E1%85%A7%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC_%E1%84%86%E1%85%B5%E1%86%BE_%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%89%E1%85%A7%E1%86%AB.gif)
    
- 새로고침 후 데이터 확인
    
    ![새로고침 확인.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b716b28d-b4ef-49c3-baa0-1892c0630f5c/%E1%84%89%E1%85%A2%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9%E1%84%8E%E1%85%B5%E1%86%B7_%E1%84%92%E1%85%AA%E1%86%A8%E1%84%8B%E1%85%B5%E1%86%AB.gif)
    

# 고민한 부분

- 새로고침 시 [검색조건, 검색키워드, 한 페이지에 보여지는 행의 수, 현재 페이지]가 모두 유지되어야 하는 점이 곤란했습니다.
    - localStorage에 직접 저장하거나 redux-persist를 사용해 localStorage에 저장해 새로고침 시에도 정보를 유지할 수 있지만, 그 두 가지 방법은 이 과제에서 금지됐습니다.
    - 그래서 스마트한 방법은 아닌 것 같지만, stringQuery를 사용해 url에 정보를 저장해 유지하는 식으로 해결했습니다. 이로 인해 위 4가지 값이 변할 때마나 새로 렌더링이 필요해 매우 느려졌습니다.
    - 분명 이 방법보다 나은 방법이 있을 것 같습니다만, 시간이 촉박해 일단 해결되는 방식으로 처리했습니다. 향후 개선이 필요해 보입니다.
- Redux-toolkit와 React-Query 둘 다 처음 사용해본 라이브러리라 학습과 함께 과제를 진행했습니다.
    - React-Query의 usequery 함수와 usemutation 함수에 대해서 학습하고 이번 과제에서 사용 가능한 usequery를 사용해 서버 데이터를 저장했습니다.
    - redux-toolkit 같은 경우, 사용하려 시도는 했지만 이 후 stringQuery로 4개의 값을 url에 저장하는 식으로 처리하게 되면서 사용됐던 코드를 삭제했습니다.

# 기간

23.01.31 ~ 23.02.02(7시까지 제출)

[notionLink](https://www.notion.so/Front-Deep-Dive-44e836c8296d4eaea161879620b7c786)
