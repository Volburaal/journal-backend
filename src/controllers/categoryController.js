import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createCategory = async (req, res) => {
    try {
        await prisma.category.create({data: req.body})
        return res.status(200).json({message:"Success!"})
    } catch (error) {
        console.error("Error while creating category:", error);
        res.status(500).json({ error: "Server error while creating category" });
    }
};

export const getCategories = async (req, res) => {
    try {
        const categories = await prisma.category.findMany({});
        return res.status(200).json(categories)
    } catch (error) {
        console.error("Error while fetching categories:", error);
        res.status(500).json({ error: "Server error while fetching categories" });
    }
};

export const editCategory = async (req, res) => {
    try {
        const {id} = req.params
        await prisma.category.update({
            data: req.body,
            where: {id: parseInt(id)}
        })
        return res.status(200).json({message:"Success!"})
    } catch (error) {
        console.error("Error while modifying category:", error);
        res.status(500).json({ error: "Server error while modifying category" });
    }
};

export const deleteCategory = async (req, res) => {
    try {
        const {id} = req.params
        await prisma.category.delete({
            where:{id: parseInt(id)}
        })
        return res.status(200).json({message:"Success!"})
    } catch (error) {
        console.error("Error while deleting category:", error);
        res.status(500).json({ error: "Server error while deleting category" });
    }
};