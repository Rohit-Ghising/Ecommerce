import { Message } from "../model/Message"



export const getMessages = async (res, req) => {
  try {
    const response = await Message.find({}).sort('-createdAt');
    return res.status(200).json({ messages: response });
  } catch (err) {
    return res.status(400).json({ error: `${err}` });
  }
}


export const addMessage = async (res, req) => {
  try {
    await Message.create(req.body);
    return res.status(201).json({ data: 'message send successfully' });
  } catch (err) {
    return res.status(400).json({ error: `${err}` });
  }
}