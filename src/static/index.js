const router = async () => {
  const routes = [
    { path: "/", view: () => console.log("to Home")},
    { path: "/myPage", view: () => console.log("to my page")},
    { path: "/settings", view: () => console.log("to settings")},
  ]
}