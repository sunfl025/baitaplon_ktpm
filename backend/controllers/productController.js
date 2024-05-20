const Product = require('../models/Product');

const productController = {
    getInfomation: async (req, res) => {
        try {
            const { 
                tienTra,
                phoneNumber,
                thoigianSD,
                donViThoiGian,
                chatLuong,
                tenSP,
                mangHinh,
                pin,
                rung,
                camTruoc,
                camSau,
                chanSac,
                loa,
                vo,
                lung,
                kinh,
                nutHome,
                khaySim
            } = req.body;

            const product = new Product({
                tienTra,
                phoneNumber,
                thoigianSD,
                donViThoiGian,
                chatLuong,
                tenSP,
                mangHinh,
                pin,
                rung,
                camTruoc,
                camSau,
                chanSac,
                loa,
                vo,
                lung,
                kinh,
                nutHome,
                khaySim
            });

            await product.save();

            console.log(tienTra, phoneNumber, thoigianSD + donViThoiGian, chatLuong, tenSP, mangHinh, pin, rung, camTruoc, camSau, chanSac, loa, vo, lung, kinh, nutHome, khaySim);
            return res.status(200).json({ message: 'Product saved successfully', product });
        } catch (error) {
            console.log("Error:", error);
            return res.status(500).json({ message: "Đã xảy ra lỗi", error: error.message });
        }
    },
}

module.exports = productController;