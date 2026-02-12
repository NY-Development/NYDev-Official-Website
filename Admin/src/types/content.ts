export interface ContentBlock {
  id: string;
  key: string;
  value: string;
  status: 'synced' | 'draft';
  updatedBy: string;
  updatedAt: string;
}
