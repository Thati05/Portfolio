import { notFound } from "next/navigation";
import blogContent from "@/constants/blog"; // Mock blog content source
import Bounded from "@/components/Bounded";
import { formatDate } from "@/utils/formateDate";

export default function BlogPost({ params }) {
  const { slug } = params; // Extract slug from URL

  // Find the blog post using the slug
  const blogPost = blogContent.find(
    (post) => post.items.replace(/\s+/g, "-").toLowerCase() === slug
  );

  if (!blogPost) {
    notFound(); // Redirect to 404 page if no blog post matches the slug
  }

  // Example formatted date, replace with your own formatDate utility
  const formattedDate = formatDate(blogPost.date);

  return (
    <Bounded as="article">
      <div className=" flex flex-col items-center px-14 ">
         {/* Date */}
        <p className="mt-8 mb-8 text-gray-400 text-sm font-medium">
          {formattedDate}
        </p> 
        
        {/* Blog Post Title */}
        <h1 className="text-4xl w-3/4 text-center font-semibold ">{blogPost.heading}</h1>
  

   <div className="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20">
       
   <p>
  <span className="font-bold text-6xl capitalize">
    {blogPost.content.charAt(0)}
  </span>
  {blogPost.content.slice(1)}
</p>
     </div>

   {/* Featured Image */}
       
        <div className="mt-10 flex flex-col gap-5 md:gap-0 md:flex-row place-items-center">
          <img
            src="/assets/images/figma.jpg"
            alt={blogPost.items}
            className=" w-80 h-96 object-contain"
            />
            <img
            src="/assets/images/code.jpg"
            alt={blogPost.items}
            className=" w-80 h-96 object-contain"
            />
             <img
            src="/assets/images/Blender.jpg"
            alt={blogPost.items}
            className=" w-96 object-contain"
            />
          
        </div>
           
      
  {/* Blog Content */}
       
     
        <div className="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20">
       
       <p>
        {blogPost.secondContent}
       </p>
     </div>

      
      </div>
    </Bounded>
  );
}
