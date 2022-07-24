import { User } from "./user";

export interface Line {
  id: number;
  text: string;
  createdAt: Date;
  author: User;
  user: string;
  likeCount: number;
}
