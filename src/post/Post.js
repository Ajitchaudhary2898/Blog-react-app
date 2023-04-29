import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">

      <img className="postImg" src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <spam className="postCat">Music</spam>
          <spam className="postCat">Life</spam>

        </div>
        <spam className="postTitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, repellat!
        </spam>
        <hr /><spam className="postDate">2 hrs ago</spam>
      </div>

      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis enim similique error, labore eveniet nesciunt quasi, numquam
         architecto, ad assumenda vel ipsam velit! Molestias cupiditate omnis quam, eum ut hic! Iste veritatis minus possimus voluptas harum,
          consequatur ad labore natus nostrum rem, voluptatem maiores, amet hic id laboriosam nam voluptatum.
      </p>
    </div>
     
  );
}
