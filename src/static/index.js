const router = async () => {
  const routes = [
    { path: "/", view: () => console.log("to Home")},
    { path: "/myPage", view: () => console.log("to my page")},
    { path: "/settings", view: () => console.log("to settings")},
  ]
  
  // default는 홈으로;
  let url = '/';

  for(const route of routes){
    if(location.pathname === route.path){
      url = route.path;
      console.log(route);
      break;
    }
  }

  history.pushState(null, null, url);
}

document.addEventListener("DOMContentLoaded", router());

