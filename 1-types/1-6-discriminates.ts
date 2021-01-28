{
  // 구분하는, 차별화하는 키를 넣어서 직관적인 코드 작성
  // function: login -> success, fail
  type SuccessState = {
    result: 'success'; // 동일한 키, 다른 값
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(id: string, password: number): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😅 fail
  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😅 ${state.reason}`);
    }
  }
}
