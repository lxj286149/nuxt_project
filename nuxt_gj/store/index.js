export const state = () => ({
    xiangQs: "",
    AreaData: "",
    userInfo: "",
    token: "",
    // Purl: "http://127.0.0.1:8080/tomato/",
    Purl2: "http://www.jt.ricemc.cn/utils/",
    Purl: "http://www.jt.ricemc.cn/tomato/",//请求接口用的
    picUrl:"http://www.jt.ricemc.cn/mcsyPic/",//没缩小的图片
    picUrlMin: "http://www.jt.ricemc.cn/mcsyPicMin/", //缩小后的图片
    picHeadUrl: "http://www.jt.ricemc.cn/headPic/", //头像路径
    picMotdUrl: "http://www.jt.ricemc.cn/MotdPic/" //Motd路径
})
export const mutations = {
    addUserInfo(state,object) {
        state.userInfo = object;
    },
    addToken(state,token){
        state.token = token;
    },
    addAreaData(state,AreaData){
        state.AreaData = AreaData;
    },
    addXiangQs(state,xiangQs){
        state.xiangQs = xiangQs;
    }
}
export const actions = {
  nuxtServerInit ({ commit }, { req },state) {
    let token = null;
    if(req.headers.cookie!=null && req.headers.cookie!=undefined){
      token = req.headers.cookie.substring(6,req.headers.cookie.length)
    }
    commit('addToken',token)
  }

}
export const getters = {

}
