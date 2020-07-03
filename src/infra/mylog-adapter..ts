import { Analytics } from "../analytics/analytics";
import { ErrorAnalytics } from "../analytics/error-analytics";

export class MyLogAnalytics implements Analytics, ErrorAnalytics {
  save: (type: string, data: string) => void;

  saveError: (error: any) => void;
}
