/* import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import lang from 'element-ui/lib/locale'

lang.use(locale)
Vue.use(Element, { locale }) */

// 完整引入 Element
// import Vue from 'vue'
// import ElementUI from 'element-ui'
// Vue.use(ElementUI)
//按需引入，测试了一下，无需每个页面引入自己页面的。都一样
import Vue from 'vue'
import { Dialog,DatePicker,MenuItemGroup,MenuItem,Menu,Submenu,Message,Pagination , Carousel,CarouselItem, Table,Tooltip,Upload,Form,Drawer,Steps,Button,Badge,Row,Col,Popover,Input,FormItem,Radio,Step,TableColumn} from 'element-ui'
// Vue.component(Message)
Vue.prototype.$message = Message
Vue.use(MenuItemGroup)
Vue.use(DatePicker)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Table)
Vue.use(Tooltip)
Vue.use(Upload)
Vue.use(Form)
Vue.use(Drawer)
Vue.use(Steps)
Vue.use(Button)
Vue.use(Row)
Vue.use(Badge)
Vue.use(Col)
Vue.use(Popover)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Radio)
Vue.use(Step)
Vue.use(TableColumn)
