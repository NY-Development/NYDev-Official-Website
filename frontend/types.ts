
export enum DeploymentStatus {
  LIVE = 'Live',
  BUILDING = 'Building',
  STOPPED = 'Stopped',
  FAILED = 'Failed',
  RETRAINING = 'Retraining'
}

export interface MetricCardProps {
  label: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'stable';
  icon: string;
  color?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'Running' | 'Live' | 'Paused' | 'Building';
  progress: number;
  techStack: string[];
  members: string[];
}
