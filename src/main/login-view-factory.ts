import { LoginView } from "../presentation/LoginView";
import { ErrorLog } from "../analytics/error-log";
import { ViewLog } from "../analytics/view-log";
import { ActionLog } from "../analytics/action-log";
import { LogStrategy } from "../analytics/log-strategy";
import { SentryAdapter } from "../infra/sentry-adapter";
import { LogglyAdapter } from "../infra/loggly-adapter";
import { FirebaseAdapter } from "../infra/firebase-adapter";
import { GoogleAnalyticsAdapter } from "../infra/google-analytics-adapter";
import { MyLogAnalytics } from "../infra/mylog-adapter.";
import { ErrorAnalyticsComposite } from "../infra/error-analytics-composite";

export const makeLoginView = (): LoginView => {
  const sentryAdapter = new SentryAdapter();
  const logglyAdapter = new LogglyAdapter();
  const firebaseAdapter = new FirebaseAdapter();
  const googleAnalyticsAdapter = new GoogleAnalyticsAdapter();
  const myLogAnalytics = new MyLogAnalytics();
  const errorAnalyticsComposite = new ErrorAnalyticsComposite([
    sentryAdapter,
    logglyAdapter,
    myLogAnalytics,
  ]);
  const errorLog = new ErrorLog(errorAnalyticsComposite);
  const viewLog = new ViewLog(firebaseAdapter);
  const actionLog = new ActionLog(googleAnalyticsAdapter);

  const logStrategy = new LogStrategy(errorLog, viewLog, actionLog);

  return new LoginView(logStrategy);
};
