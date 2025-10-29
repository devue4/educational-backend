const Education = require("../models/Education");

exports.getEducation = async (req, res) => {
  const { id } = req.params;

  if (id) {
    const educationItem = await Education.findById(id).populate('author', 'fullName');
    if (!educationItem) {
      return res.status(404).json({ message: "دوره پیدا نشد" });
    }
    return res.json(educationItem);
  }
  const education = await Education.find().populate('author', 'fullName');
  res.json(education);
};

exports.addEducation = async (req, res) => {
    const { title, content } = req.body;

    const education = new Education({
      title,
      content,
      author: req.user.id,
      publishedAt: new Date()
    });

    await education.save();
    res.status(201).json(education);
};

exports.updateEducation = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const education = await Education.findByIdAndUpdate(
      id,
      {
        title,
        content,
        publishedAt: new Date()
      },
      { new: true }
    );

    if (!education) return res.status(404).json({ message: 'دوره پیدا نشد' });

    res.json(education);
};

exports.deleteEducation = async (req, res) => {
    const { id } = req.params;

    const education = await Education.findByIdAndDelete(id);
    if (!education) return res.status(404).json({ message: 'دوره پیدا نشد' });

    res.json({ message: 'دوره با موفقیت حذف شد' });
};
