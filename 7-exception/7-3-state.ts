// 예상 가능한 세부 에러 제어가 필요한 곳에는 error state를 사용하는 것이 더 좋다
{   
    type NetworkErrorState = {
        result: 'fail';
        reason: 'offline' | 'down' | 'timeout'
    }

    type SuccessState = {
        result: 'success';
    }

    type ResultState = SuccessState | NetworkErrorState;

    class NetworkClient {
        tryConnect():ResultState {}
    }

    class UserService {
        constructor(private client: NetworkClient) {}

        login() {
            this.client.tryConnect();
            // login logic...
        }
    }

    // 에러 처리 위치가 여기가 맞을까? 고민 하기
    // 에러를 던져 주고 유의미한 행동을 할 수 있는 곳에...
    class App {
        constructor(private userService: UserService) {}
        run() {
            try {
                this.userService.login();
            } catch(error) {
                // show dialog to use
            }        
        }
    }

    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);

    app.run();
}