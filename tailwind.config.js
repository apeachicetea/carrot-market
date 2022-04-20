module.exports = {
  // 어느 component or page에서 tailwind를 사용할 것인지를 tailwind에게 말해줘야함
  content: [
    //page안의 모든 폴더의 모든 파일인데 확장명이 js,jsx,ts,tsx일 수 있다라는 의미이다
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
