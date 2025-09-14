export interface Image {
  id: string;
  url: string;
  alt: string;
  prompt: string;
  tags: string[];
  likes: number;
}

export interface Review {
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
  rating: number;
  text: string;
  status: 'approved' | 'pending' | 'rejected';
}
