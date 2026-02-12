import Content from '../models/Content.js';
import AuditLog from '../models/AuditLog.js';

export const getContent = async (req, res, next) => {
  try {
    const blocks = await Content.find().sort({ updatedAt: -1 });
    res.json(blocks.map((block) => ({ id: block._id, ...block.toObject() })));
  } catch (error) {
    next(error);
  }
};

export const getContentByKey = async (req, res, next) => {
  try {
    const block = await Content.findOne({ key: req.params.key });
    if (!block) return res.status(404).json({ message: 'Content not found' });
    res.json({ id: block._id, ...block.toObject() });
  } catch (error) {
    next(error);
  }
};

export const updateContentByKey = async (req, res, next) => {
  try {
    const block = await Content.findOneAndUpdate(
      { key: req.params.key },
      { value: req.body.value, status: 'draft', updatedBy: req.user?.email || 'system' },
      { new: true, upsert: true }
    );
    await AuditLog.create({
      action: 'Updated content block',
      actor: req.user?.email || 'system',
      target: block.key,
      metadata: { contentId: block._id.toString() },
    });
    res.json({ id: block._id, ...block.toObject() });
  } catch (error) {
    next(error);
  }
};
