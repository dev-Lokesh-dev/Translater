import translate from "translate";

const translateWords = async (req, res) => {
    const { text, language } = req.body;

    if (!text || !language) {
        return res.status(400).json({ msg: "Text and language fields are required" });
    }

    try {
        translate.engine = "google"; 
        translate.key = "";

        const translatedText = await translate(text, { to: language });

        return res.status(200).json({ translatedText });
    } catch (error) {
        console.error("Translation Error:", error);
        return res.status(500).json({ msg: "Translation failed", error: error.message });
    }
};

export { translateWords };
