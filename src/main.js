import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible';
import { Button } from 'vant';

createApp(App).mount('#app')

const app =createApp(App);
app.use(Button)
