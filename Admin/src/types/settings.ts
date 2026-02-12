export interface Settings {
  siteName: string;
  supportEmail: string;
  environment: 'production' | 'staging' | 'development';
  timezone: string;
  apiKeys: {
    stripeSecretKey: string;
    awsAccessKey: string;
  };
  features: {
    maintenanceMode: boolean;
    debugLogging: boolean;
  };
}
