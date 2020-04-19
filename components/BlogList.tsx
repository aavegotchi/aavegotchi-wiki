import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import { themeColor } from "../theme";

const BlogList = (props) => {

  console.log('props:', props)

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4);
  }

  return (
    <div>

      {props.allBlogs.length > 0 && props.allBlogs.map(post => (
        <Link
          key={post.slug}
          href="/post/[slug]"
          as={`/post/${post.slug}`}
        >
          <a>

            <Row>

              <div className="row">

                <Col xl={4} lg={4} md={5} sm={12} xs={12} >
                  <div className="heroImage">
                    <img src={post.document.data.hero_image} alt={post.document.data.hero_image} />
                  </div>
                </Col>


                <Col>

                  <div className="blogInfo">
                    <h2>{post.document.data.title}</h2>

                    {/*}  <h3> {reformatDate(post.document.data.date)}</h3>
                  {*/}


                    {post.document.data.description &&
                      <p style={{ marginBottom: 8 }}>{post.document.data.description}</p>
                    }


                    <div className="metadata">
                      <div style={{ fontSize: '12px', color: 'black' }}>Tags:</div>

                      {post.document.data.tags && post.document.data.tags.map((tag) => {
                        return (
                          <div key={tag} className="tag">{tag}</div>
                        )
                      })

                      }

                    </div>

                  </div>
                </Col>

              </div>


            </Row>
          </a>
        </Link>
      ))}

      <style jsx>
        {`

          .heroImage {
            overflow:hidden;
            max-height:200px;
            min-height:200px;
            object-fit:cover;
          }
          img {
            width:100%;
            height:100%;
          }

          a {
            margin:15px;
            color:black;
          }

          a:hover {
            color:${themeColor};
            text-decoration:none;
          }

          .metadata {
            margin-top:10px;
            display:flex;
            flex-direction:row;
          }

          .tag {
            color:black;
            font-size:12px;
            margin-left:5px;
          }


          h2 {
            margin-bottom: 0.5rem;
          
          }
          h3 {
            margin-bottom: 1rem;
          }

          .blogInfo {
            display:flex;
            flex:1;
            flex-direction:column;
            height:100%;
            border-bottom:solid 1px whitesmoke;
          }
         
          @media screen and (max-width:768px) {
          
            .heroImage {
              padding:15px;
            }

            .blogInfo {
              padding:15px;
            }
            
          }
         
         

        `}
      </style>
    </div>
  );
};

export default BlogList;
