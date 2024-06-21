import $ from 'jquery'
import {sleep} from './sleep'
import store from '../store/index'
export async function startLoading() {
    $(".loadline").css("opacity","1");
    
    while (store.state.loadingPercentage < 100 && store.state.status !== 200) {
        
        store.state.loadingPercentage += 5;
        console.log(`درصد لود: ${store.state.loadingPercentage}%`);
        $(".loadline").css("width", store.state.loadingPercentage + "%");

await sleep(1000);
}

if (store.state.status === 200) {
store.state.loadingPercentage = 100;
$(".loadline").css("width", store.state.loadingPercentage + "%");
await sleep(2000);
$(".loadline").css("opacity","0");
await sleep(2000);
$(".loadline").css("width", "1%");
console.log('فرآیند لود کامل شد.');
}
}
export async function reload() {
        store.state.status = 0
        store.state.loadingPercentage = 5
        startLoading()
}