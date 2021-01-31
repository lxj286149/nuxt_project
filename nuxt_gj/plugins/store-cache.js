export function setLocalStorage(ctx) {

  //离开页面 刷新前 将store中的数据存到localStorage
  window.addEventListener('beforeunload', () => {
    if (ctx.store.state.userInfo != null && ctx.store.state.userInfo != "") {

      localStorage.setItem("userInfo", JSON.stringify(ctx.store.state.userInfo))
    }
  });

  // 获取localStorage中的store数据
  let userInfos = localStorage.getItem("userInfo")

  if (userInfos) {
    if (userInfos.message == "已经退出") {

    } else {
      let userInfo = {}
      userInfo = JSON.parse(userInfos);
      // 将localStorage中的store数据替换到store中
      ctx.store.commit('addUserInfo', userInfo);
    }
  }
}
