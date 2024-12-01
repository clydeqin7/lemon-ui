<template>
   <div class="topNav">
    <div class="logo">logo</div>
    <div class="menu">menu</div>
  </div>
</template>

<style lang="scss" scoped>
$text: #6f2e6a;

.topNav {
  width: 100%;
  background-color: #fff;
  box-shadow: 0 5px 5px rgba(#333, 0.1);
  display: flex;
  padding: 16px;
  z-index: 10;
  color: $text;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > a {
      text-decoration: none;
      svg {
        width: 42px;
        height: 34px;
      }
    }
  }
}
</style>