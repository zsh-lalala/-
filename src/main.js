import { createApp } from 'vue';
import App from './App.vue';
import 'amfe-flexible';
import { Button 
    ,Icon
    , Tab
    ,Tabs
    ,TreeSelect
    ,Toast
    ,Stepper
    , ActionBarButton
    , ActionBarIcon
    , ActionBar
    ,Checkbox
    ,CheckboxGroup
    ,SubmitBar
    ,ContactCard
    ,Card
    ,Dialog
    ,AddressList
    ,AddressEdit
    ,Field
    ,Form} from 'vant';
import router from './router/index';
import './common/css/base.less';
import store from './store'

const app =createApp(App);
app.use(Button)
.use(Field)
.use(Form)
.use(Icon)
.use(Tab)
.use(Tabs)
.use(SubmitBar)
.use(Toast)
.use(TreeSelect)
.use(Stepper)
.use(ActionBarButton)
.use(ActionBarIcon)
.use(ActionBar)
.use(Checkbox)
.use(CheckboxGroup)
.use(ContactCard)
.use(Card)
.use(AddressList)
.use(Dialog)
.use(AddressEdit);

app.use(router);
app.use(store);
app.mount('#app')
