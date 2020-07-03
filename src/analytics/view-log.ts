import { Log } from "../presentation/Log";
import { Analytics } from "./analytics";

export class ViewLog implements Log {
  constructor(private readonly analytics: Analytics) {}

  event(type: Log.Type, data: Log.Data): void {
    this.analytics.save(type, data.name);
  }
}
