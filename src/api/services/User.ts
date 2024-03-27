import {instance} from '../axios';
import {User, userSchema} from '../types/schemas/user';

const fetchOne = async (id: number) => {
  const response = await instance.get<User>(`users/${id}`);
  return userSchema.parse(response.data);
};

export default {
  fetchOne,
};
