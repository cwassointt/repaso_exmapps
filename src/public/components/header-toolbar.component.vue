<script>
import LanguageSwitcher from './language-switcher.component.vue';

export default {
  name: 'header-toolbar',
  components: {
    LanguageSwitcher
  },
  data() {
    return {
      items: [
        {label: 'Home', to: '/home'},
        {label: 'Examiner Performance Overview', to: '/nursing/examiner-performance-overview'}
      ]
    };
  }
};
</script>

<template>
  <header class="header-toolbar">
    <div class="left-section">
      <img src="https://hign.org/sites/default/files/2022-01/HIGN-logo-1200.png" alt="HIGN Logo" class="logo"/>
      <span class="company-name">{{$t('header.title')}}</span>
    </div>
    <nav>
      <ul>
        <li v-for="item in items" :key="item.label">
          <router-link :to="item.to">{{ item.label }}</router-link>
        </li>
      </ul>
    </nav>
    <language-switcher/>
  </header>
</template>

<style scoped>
.header-toolbar {
  display: flex;
  justify-content: space-between; /* Asegura que los elementos estén distribuidos */
  align-items: center;
  padding: 10px 20px;
  background-color: cadetblue;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0; /* Alinea la toolbar a la izquierda */
  width: 100%;
  z-index: 1000;
}

.left-section {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
  margin-right: 10px;
}

.company-name {
  font-size: 1.2em;
  font-weight: bold;
}

nav ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

nav li {
  margin-right: 20px;
}

.language-switcher {
  margin-left: 20px;
}
</style>