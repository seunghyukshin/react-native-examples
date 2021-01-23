# React Native 맛보기

### (Noovies 클론코딩)

######

#### Clone Target

https://play.google.com/store/apps/details?id=co.nomadcoders.noovies

#### 화면 구성 및 구현할 기능

- [ ] 앱 실행시 Spalsh Screen 1초
- [x] Bottom Tab
- [ ] Screen
  - [x] Movies
    - [x] 최상단 (자동 슬라이드)
    - [x] Popular Movies (슬라이드)
    - [x] Coming Soon
  - [x] TV
    - [x] Popular Shows (슬라이드)
    - [x] Top Rated (슬라이드)
    - [x] Airing Today
  - [x] Search
    - [x] 입력창
    - [x] Movie Results (슬라이드)
    - [x] TV Results (슬라이드)
  - [ ] Discovery
    - [ ] Drag & Drop
- [ ] Component
  - [x] 영화 프로필
    - [x] Movies 최상단 component
    - [x] 세로 component (Popular Movies, Popular Shows, Movies/TV Results)
    - [x] 가로 component (Coming Soon, Airing Today)
    - [x] 가로 세로 component는 isHover시 opacity 값 변경
  - [x] 영화 Detail
    - [x] 각 정보 출력
    - [x] Movies, TV, Search 스크린에서 들어올 수 있고, 뒤로가기 시 들어왔던 스크린으로 복귀
    - [x] videos 클릭 시) youtube 앱 실행 후, 해당하는 영상 보여줌
  - [ ] Progress Bar
    - [ ] componentDidMount - 서버에서 값 받아오기 전까지

#### Target과 다르게 구현할 부분

- [ ] Bottom Tab Navigation 클릭 시) Stack으로 쌓이는 방식 → 같은 depth에서 움직임
  - Fragment 개념으로 인식하여 Target 어플이 잘못 구현된 것이라 생각
  - RN 예제, Instagram도 같은 방식으로 동작 확인
  - 잘못 구현된 부분은 아니지만 android의 Fragment와 같은 방식으로 구현해보기
