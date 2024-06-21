import { createApp,onMounted } from 'vue'
import { Datepicker, Input, initTE} from "tw-elements";
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import 'jquery/src/jquery.js';
import 'popper.js/dist/popper.min.js';
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
// platform icon
import { faPlaystation } from '@fortawesome/free-brands-svg-icons'
import { faWindows } from '@fortawesome/free-brands-svg-icons'
import { faXbox } from '@fortawesome/free-brands-svg-icons'
import { faLinux } from '@fortawesome/free-brands-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faNeos } from '@fortawesome/free-brands-svg-icons'
import { faAndroid } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
// mobile navbar icon
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'



onMounted(() => {
    initTE({ Datepicker, Input,Carousel });
  });



/* add icons to the library */
library.add(faUserSecret,faArrowRight,faArrowLeft,faMagnifyingGlass,faHeadset,faWindows,faPlaystation,faXbox,faLinux,faApple,faNeos,faAndroid,faStar,faDownload,faXmark,faHouse,faGamepad)
createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
