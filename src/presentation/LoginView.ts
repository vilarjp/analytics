import { Log } from "./Log";

export class LoginView {
  constructor(private readonly log: Log) {}

  render() {
    this.log.event("error", new Error("any-error"));
    this.log.event("view", { name: "Login" });
    this.log.event("action", { name: "Click" });
  }
}
