import { translatorModel } from "../models/translatorHistory.model.js";

const createTranslatorHistory = async (req, res) => {
    try {
        const {email} = req.user
        const { search } = req.body;

        if (!email || !search) {
            return res.status(400).json({ msg: "Field is missing" });
        }

        const history = await translatorModel.create({ email, search });

        res.status(201).json({ msg: "History saved", history });
    } catch (error) {
        console.error("Create History Error:", error);
        res.status(500).json({ msg: "Internal server error", error: error.message });
    }
};

const getTranslatorHistory = async (req, res) => {
    try {
        const {email} = req.user

        if (!email) {
            return res.status(400).json({ msg: "Email is required" });
        }

        const data = await translatorModel.find({ email });

        res.status(200).json({ msg: `History for ${email}`, data });
    } catch (error) {
        console.error("Get History Error:", error);
        res.status(500).json({ msg: "Internal server error", error: error.message });
    }
};

export { createTranslatorHistory, getTranslatorHistory };
