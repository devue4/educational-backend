const Research = require("../models/Research");

exports.getResearch = async (req, res) => {
  const { id } = req.params;

  if (id) {
    const researchItem = await Research.findById(id).populate('author', 'fullName');
    if (!researchItem) {
      return res.status(404).json({ message: "پژوهش پیدا نشد" });
    }
    return res.json(researchItem);
  }
  const research = await Research.find().populate('author', 'fullName');
  res.json(research);
};

exports.addResearch = async (req, res) => {
    const { title, content } = req.body;

    const research = new Research({
      title,
      content,
      author: req.user.id,
      publishedAt: new Date()
    });

    await research.save();
    res.status(201).json(research);
};

exports.updateResearch = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const research = await Research.findByIdAndUpdate(
      id,
      {
        title,
        content,
        publishedAt: new Date()
      },
      { new: true }
    );

    if (!research) return res.status(404).json({ message: 'پژوهش پیدا نشد' });

    res.json(research);
};

exports.deleteEducation = async (req, res) => {
    const { id } = req.params;

    const research = await Research.findByIdAndDelete(id);
    if (!research) return res.status(404).json({ message: 'پژوهش پیدا نشد' });

    res.json({ message: 'پژوهش با موفقیت حذف شد' });
};
