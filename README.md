### LUSH 브랜드 소개 사이트 작업일지 (240105~2401)

### https://sol227.github.io/lush/

<!-- #### 240112 -->

#### 240111

- .footer에 position sticky를 주니 위에 컨텐츠들에 배경색을 지정하지않아 .footer 컨텐츠가 겹쳐보이는 문제  
  -> 각각의 <section>에 배경색 값 지정  
  -> z-index로 밑으로 보냈던 .intro와 .ending에 텍스트 애니메이션이 안 보이는 문제 발생  
  -> 애니메이션에 z-index를 빼고 위로 올라오는 이미지에 z-index를 줌(img와 ani를 <div>로 함께 감싸고 있던 html도 수정 -> ani_wrap을 바깥으로)

##### 인트로

- 디자인 통일감 주기 위해 색상 변경(좀 더 손 봐야할 것 같음)
- 마우스 오버되는 이벤트 정리
- css - 텍스트 ani가 인트로 배경이미지 아래에 보여야 하는데 위에 올라와 보이는 문제로 z-index로 해결하려 했는데 실패  
  -> <section class="intro">에 자식요소에 position absolute를 주고 z-index 값 지정하니까 해결됨
- js - gsap scrolltrigguer를 이용해 인트로에서 스크롤을 내리면 배경이미지가 축소되는 효과를 주려고 했는데 이미지가 스크롤을 넘어가는 문제와 가운데 정렬이 안됨  
  -> 이미지를 감싸고 있던 <div>에 값을 주고 있어서 그랬음 트리거를 <img>에 지정하니 스크롤을 넘어가는 것은 바로 해결  
  -> 가운데 정렬은 <img>를 감싸고 있던 <div>에 flex를 주어 정렬을 맞춤

##### 기프트 페이지

- html / css - 텍스트가 곡선의 형태를 가지고 이미지를 따라가도록 스크롤 이벤트를 주기 위해 path(svg로 path를 그리는게 너무 어려우나 피그마를 활용해 그린 path 코드를 가져다가 사용)와 textpath를 이용
<!-- - js - -->

#### 240110

- figma - 인트로 애니메이션에 들어갈 텍스트 svg를 수정 후 저장을 했는데, 몇글자가 보이지 않거나 아웃라인이 겹쳐져서 저장됨  
  -> 텍스트 outline stroke로 선을 면으로 바꾸어 해결

#### 240109

- css - 인트로 / 히스토리 / 프로덕트 / 기프트 / 캠페인 / 브랜드까지 기본적인 스타일 작업
- css - 인트로 배경을 백그라운드 이미지로 주고 거기에 position sticky를 주었는데, 이미지가 보이지 않는 문제 (앱솔루트를 주면 보임)  
  -> 이미지의 높이값을 부여해서 해결
- 인트로 부분에 position sticky를 주어 배경이미지는 고정되어있고 컨텐츠만 스크롤 올라가게 해야되는데 잘 안됨.  
  -> gsap scrollTrigger를 이용해서 시도해봐야겠음
- css - 프로덕트에서 러쉬 사이트 연결 <a> 태그네 마우스 이벤트를 주기 위해 가상선택자::after 사용하면서 가상요소 텍스트에 줄바꿈 하는 방법을 알게 됨
  -> \A + white-space: pre;

#### 240108

- 브랜드 이념 파트 프로토 타입, 디자인 시안 작업
- html 마크업 작업 완성
- 이미지 정리 및 이미지 소스 제작(gif)

#### 240107

- 제품 / 기프트 / 캠페인 / 푸터 파트 프로토 타입, 디자인 시안 작업

#### 240106

- 페이지에 들어갈 내용 정리 -> 브랜드 설명에 관련된 내용으로 정리
- 인트로 / 역사 파트 프로토 타입, 디자인 시안 작업

#### 240105

- 레퍼런스 사이트와 브랜드 선정
- 러쉬 소개 페이지 구성 및 방향성 구상
