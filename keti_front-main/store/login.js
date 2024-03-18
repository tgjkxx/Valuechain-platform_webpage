// 로그인 정보를 저장하는 store
export const state = () => ({
  id: '',
  password: '',
});

export const mutations = {
  update(state, { id, password }) {
    state.id = id;
    state.password = password;
  },
};

export const actions = {
  login({ commit }, { id, password }) {
    // 로그인 로직을 여기에 작성합니다.
    // 예를 들어, 서버에 로그인 요청을 보내고 응답을 받는 코드를 작성할 수 있습니다.

    // 로그인이 성공하면, update 뮤테이션을 호출하여 로그인 정보를 저장합니다.
    commit('update', { id, password });
  },
};
