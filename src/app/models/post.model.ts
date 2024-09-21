export interface Post 
{
  id: string;
  title: string;
  content: string;
  summary: string;
  urlHamdle: string;
  featuredImageUrl: string;
  author: string;
  visible: boolean;
  publishedDate: Date;
  updatedDate: Date;
}
