import connectDB from '../../utils/dbConnect';
import ContactModel from '../../models/contact'; // Change 'Contact' to 'contact'

connectDB();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, phone } = req.body;
      const contact = new ContactModel({
        name,
        email,
        phone
      });
      await contact.save();
      res.status(201).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
