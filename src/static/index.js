import Home from "./views/home.js";
import MyPage from "./views/myPage.js";
import Settings from "./views/settings.js";

const router = async () => {
  const routes = [
    { path: "/", view: Home},
    { path: "/myPage", view: MyPage},
    { path: "/settings", view: Settings},
  ]
  
  // default는 홈으로
  let current_view = routes[0].view;

  for(const route of routes){
    if(location.pathname === route.path){
      current_view = route.view;
      break;
    }
  }
  console.log('current view',current_view.getHtml());
  document.querySelector('#app').innerHTML = await current_view.getHtml();
}
window.addEventListener("popstate", () => {
  console.log('popstate');
  router();
});
document.addEventListener("DOMContentLoaded", () => {
  console.log('DOMContentLoaded');
  document.body.addEventListener('click', e => {
    e.preventDefault();
    history.pushState(null, null, e.target.href);
    console.log('pushState', e.target.href);
    router();
  })
});

