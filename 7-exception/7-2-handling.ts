{
    class TimeoutError extends Error {}
    class OfflineError extends Error {}

    class NetworkClient {
        tryConnect():void {
            throw new OfflineError('no network!')
        }
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