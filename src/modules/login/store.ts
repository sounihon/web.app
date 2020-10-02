import { action, observable } from "mobx";

interface IUser {
  id?: string;
  username?: string;
}

export class AuthStore {
  @observable user: IUser = {
    username: "Tom",
  };

  @action
  async registerUser() {
    console.log("ASDASD haha");
    await new Promise((resolve) => setTimeout(resolve, 500));
    this.user.username = "Bob";
    console.log(this.user.username);
  }
}

export const authStore = new AuthStore();
