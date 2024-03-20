import * as z from "zod";

const UserValidation = z.object({
  username: z.string().min(2).max(18),
  name: z.string().min(3).max(18),
  profile_photo: z.string().url().min(3),
  bio: z.string().min(3).max(1000),
});

export default UserValidation;
