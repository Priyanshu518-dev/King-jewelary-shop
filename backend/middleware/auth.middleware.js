import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// 🔒 Protect logged-in users
export const protectRoute = async (req, res, next) => {
	try {
		const token = req.cookies.accessToken;

		if (!token) {
			return res.status(401).json({ message: "Not authorized" });
		}

		const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

		const user = await User.findById(decoded.userId).select("-password");
		if (!user) {
			return res.status(401).json({ message: "User not found" });
		}

		req.user = user;
		next();
	} catch (error) {
		return res.status(401).json({ message: "Invalid or expired token" });
	}
};

// 🛑 Admin only
export const adminRoute = (req, res, next) => {
	if (req.user && req.user.role === "admin") {
		next();
	} else {
		return res.status(403).json({ message: "Admin access only" });
	}
};
