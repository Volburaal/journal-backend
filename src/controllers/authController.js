import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const login = async (req, res) => {
    try {
      const {pin} = req.body
      const isPasswordValid = await bcrypt.compare(process.env.PIN, pin);
      if (isPasswordValid){
        const token = jwt.sign(
          {name: "Seraphim"},
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
        res.json({
          message: "Login successful",
          token,
        });
      }
      else{
        res.status(400).json({message:"Incorrect Pin"})
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: "Server error" });
    }
};