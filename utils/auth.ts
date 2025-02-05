import jwt from "jsonwebtoken";
type UserPayload = {
    _id: string;
    email: string;
    role: string
  };
  
  export default function Token(user: UserPayload): string {
    
    const tokenData = {
      id: user._id,
      role: user.role,
      email: user.email,
    };
  
    const token = jwt.sign(tokenData, process.env.SESSION_SECRET, {
      expiresIn: "1h",
    });

    return token;
  }