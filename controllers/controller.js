import contactData from "../models/models.js";


export const getAlldata = async (req, res) => {
    try {
        const alldata = await contactData.find()
        res.json(alldata);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

export const getOneData = async (req, res) => {
    try {
        if (req.params.id == null) {
            return res.status(404).json({ message: "can'not find data" })
        } else {
            const getOne = await contactData.find({ _id: req.params.id });
            res.json(getOne)
        }

    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {

    const postData = contactData({
        phone: req.body.phone,
        textInput: req.body.textInput,
        Email: req.body.Email,
        fullName: req.body.fullName
    })
    try {
        const addedData = await postData.save();
        return res.status(202).json(addedData)
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
}

export const updatePost = async (req, res) => {
    try {
        const updatedData = await contactData.findByIdAndUpdate({ _id: req.params.id }, {
            phone: req.body.phone,
            textInput: req.body.textInput,
            Email: req.body.Email,
            fullName: req.body.fullName
        }, { new: true });

        res.status(200).json(updatedData)
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
}

export const delectPost = async (req, res) => {
    const delectedid = req.params.id;

    try {
        await contactData.deleteOne({ _id: delectedid })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

    res.send("delete the response")
}

