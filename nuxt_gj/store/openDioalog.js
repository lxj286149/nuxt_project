export const state = function () {
  return {
    riskDialog: {
      title: '',
      desc: '',
      placeholder: '',
      visible: false,
      btn: '',
    },
  };
};

export const mutations = {

  openRiskDialog(state, data) {
    const defaultData = data ? {
      title: data.title || '企业经营风险分析及应对方案',
      desc: data.desc || '',
      placeholder: data.placeholder || '请输入手机号',
      visible: data.visible || true,
      btn: data.btn || '确定'
    } : {
      visible: true,
    };
    state.riskDialog = Object.assign({}, state.riskDialog, defaultData);
  },
  closeRiskDialog(state) {
    state.riskDialog = {
      title: '',
      desc: '',
      placeholder: '',
      visible: false,
      btn: ''
    };
  },
};
