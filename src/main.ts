import { createApp } from 'vue';
import App from './App.vue';
import '@aws-amplify/ui-vue/styles.css';
import '@fontsource/inter/variable.css';
import AmplifyVue from '@aws-amplify/ui-vue';

const app = createApp(App);
app.use(AmplifyVue);
app.mount('#app');
