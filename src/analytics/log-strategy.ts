import { Log } from "../presentation/Log";
import { ErrorLog } from "./error-log";
import { ViewLog } from "./view-log";
import { ActionLog } from "./action-log";

export class LogStrategy implements Log {
  constructor(
    private readonly errorLog: ErrorLog,
    private readonly viewLog: ViewLog,
    private readonly actionLog: ActionLog
  ) {}

  event(type: Log.Type, data: Log.Data) {
    switch (type) {
      case "error":
        this.errorLog.event(type, data);
        break;
      case "view":
        this.viewLog.event(type, data);
        break;
      case "action":
        this.actionLog.event(type, data);
        break;
    }
  }
}
