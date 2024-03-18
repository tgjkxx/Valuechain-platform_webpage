// 회원가입 폼 데이터를 저장하는 store

export const state = () => ({
  organizationName: '',
  registrationNumber: '',
  userName: '',
  tellNumber: '',
  email: '',
  address: '',
  detailedAddress: '',
  applicationData: '',
  dataUsagePurpose: '',
  files: [],
});

export const mutations = {
  update(state, payload) {
    Object.assign(state, payload);
  },
  updateFiles(state, files) {
    state.files = [...files];
  },
};
