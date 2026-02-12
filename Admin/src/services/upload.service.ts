import api from './api';

export interface UploadResponse {
  url: string;
  publicId: string;
  resourceType: string;
  format: string;
}

export const uploadAsset = async (file: File): Promise<UploadResponse> => {
  const formData = new FormData();
  formData.append('file', file);

  const { data } = await api.post('/api/admin/uploads', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return data;
};
