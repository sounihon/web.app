import { action, makeObservable, observable } from "mobx";
import { userApp } from "../../api";

export class AuthStore {
  @observable userId?: string;
  @observable userLogin?: string;
  @observable userJWT?: string;
  @observable userLoggedIn?: boolean;

  constructor() {
    makeObservable(this);
    if (localStorage.getItem("s-user-jwt")) {
      this.userJWT = localStorage.getItem("s-user-jwt") as string;
      this.loginUserByJWT();
    }
  }

  @action
  async loginUserByLP(login: string, password: string): Promise<void> {
    const { data } = await userApp.post<{
      userId: string;
      login: string;
      token: string;
    }>("/user/login", {
      login,
      password,
    });

    this.userId = data.userId;
    this.userLogin = data.login;
    this.userJWT = data.token;

    localStorage.setItem("s-user-jwt", this.userJWT);
  }

  @action
  async loginUserByJWT(): Promise<void> {}

  @action
  async registerUser(login: string, password: string): Promise<void> {
    const { data } = await userApp.post<{ result: boolean }>("/user/register", {
      login,
      password,
    });
    if (!data.result) {
      throw new Error(
        "Something went wrong during registration. Please try again later."
      );
    }
  }
}

export const authStore = new AuthStore();
//@ts-ignore
window.authStore = authStore;
