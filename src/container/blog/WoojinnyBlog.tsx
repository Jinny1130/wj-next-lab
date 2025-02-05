import '@/styles/blog.scss';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default async function WoojinnyBlog() {
  const mdFolderPath = path.join(process.cwd(), 'src/container/blog/markdown');
  const fileNames = fs.readdirSync(mdFolderPath);

  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(mdFolderPath, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // gray-matter로 메타데이터{ title: string, date: string } 파싱
    const { data, content } = matter(fileContents);

    return {
      fileName,
      title: data.title,
      date: data.date,
      content,
    };
  });

  return (
    <div className="flex">
      <div className="blog_menu h-full sm:w-1/6">menu area</div>

      <div className="md_post_list_wrap h-full sm:w-5/6 sm:flex sm:items-center">
        {posts.map((post) => (
          <div
            className="md_post_item shadow-md w-full sm:w-1/3"
            key={post.fileName}
          >
            <h2>{post.title}</h2>
            <p>{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
