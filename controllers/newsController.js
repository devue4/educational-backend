const News = require("../models/News");

exports.getNews = async (req, res) => {
  const { id } = req.params;

  if (id) {
    const newsItem = await News.findById(id).populate('author', 'fullName');
    if (!newsItem) {
      return res.status(404).json({ message: "خبر پیدا نشد" });
    }
    return res.json(newsItem);
  }
  const news = await News.find().populate('author', 'fullName');
  res.json(news);
};

exports.addNews = async (req, res) => {
    const { title, content } = req.body;

    const news = new News({
      title,
      content,
      author: req.user.id,
      publishedAt: new Date()
    });

    await news.save();
    res.status(201).json(news);
};

exports.updateNews = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const news = await News.findByIdAndUpdate(
      id,
      {
        title,
        content,
        publishedAt: new Date()
      },
      { new: true }
    );

    if (!news) return res.status(404).json({ message: 'خبر پیدا نشد' });

    res.json(news);
};

exports.deleteNews = async (req, res) => {
    const { id } = req.params;

    const news = await News.findByIdAndDelete(id);
    if (!news) return res.status(404).json({ message: 'خبر پیدا نشد' });

    res.json({ message: 'خبر با موفقیت حذف شد' });
};
