import cloudinary from '../utils/cloudinary.js';

const uploadToCloudinary = async (file) => {
  const dataUri = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
  return cloudinary.uploader.upload(dataUri, {
    resource_type: 'auto',
    folder: process.env.CLOUDINARY_FOLDER || 'nydev',
  });
};

export const uploadAsset = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const result = await uploadToCloudinary(req.file);

    res.status(201).json({
      url: result.secure_url,
      publicId: result.public_id,
      resourceType: result.resource_type,
      format: result.format,
    });
  } catch (error) {
    next(error);
  }
};
