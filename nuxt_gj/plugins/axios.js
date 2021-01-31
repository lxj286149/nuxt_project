import { Message } from "element-ui";
export default ({redirect,$axios,store}) => {
  $axios.onRequest(config => {
    // 向请求头中塞入 token
    // config.headers.token = tokens
  });

  $axios.onResponse(res => {
    // 返回数据逻辑处理
    /* if (res.data.code === 1) {
      // 重定向到 login 页
      redirect('/login')
    } */
  });

  $axios.onError(error => {
    /* Message({
      showClose: true,
      message: error,
      type: "发生了一个错误"
    }); */
    /*
    switch (error.response.status) {
      case 403:
        redirect('/error/403')
        break;
      case 404:
        redirect('/error/404')
        break;
      case 500:
        redirect('/error/500')
        break;
      default:
        break;
    } */
  })
};
