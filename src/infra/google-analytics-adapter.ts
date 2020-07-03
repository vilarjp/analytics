import { Analytics } from "../analytics/analytics";
// Example: import ReactGA from 'react-ga';

export class GoogleAnalyticsAdapter implements Analytics {
  save(type: string, name: string): void {
    // Example:
    // ReactGA.initialize("UA-000000-01");
    // ReactGA.pageview(window.location.pathname + window.location.search);
  }
}
