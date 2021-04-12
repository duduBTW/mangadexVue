<template>
  <router-view />
</template>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0px;
  margin: 0px;

  --background: #060a10;
  --main: #392a4b;
  --darker-main: #291d36;
  --second: #6bc4d4;
  --font-color: #ffffff;
  --darker-second: #6bc4d4;
  --gradiant: linear-gradient(
    143.7deg,
    #1e1c35 -78.74%,
    #442e53 31.8%,
    #152390 142.33%
  );

  min-height: 100vh;
  color: var(--font-color);
  background: var(--background);
}
</style>
