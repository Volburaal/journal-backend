import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createEntry = async (req, res) => {
    try {
      const {newEntryContent} = req.body;
      const entry = await prisma.entry.create({
        data:{content: newEntryContent}
      })
      return res.status(200).json(entry)
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: "Server error" });
    }
};

export const getEntries = async (req, res) => {
    try {
      const entries = await prisma.entry.findMany({});
      return res.status(200).json(entries)
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: "Server error" });
    }
};