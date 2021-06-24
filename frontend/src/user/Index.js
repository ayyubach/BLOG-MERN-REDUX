import React,{useEffect} from 'react'
import {getPosts} from '../dataStore/actions/postActions'
import {useSelector,useDispatch} from 'react-redux';
import {Accordion,Card,CardHeader,AccordionToggle,AccordionCollapse,Button} from 'react-bootstrap'

const Index = () => {

    const dispatch = useDispatch();
     const posts = useSelector(state => state.posts.posts);
      //Object.values(posts).map(p=>posts2.push(p.user));
    //console.log(posts);
    
    
    useEffect(() => {
        dispatch(getPosts());
        return () => {
            
        }
    }, [])
    return (
        <div>
                                 <Accordion>
          {posts?(posts.map(post=>(
                        <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey={post._id}>
                            {post.title}
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={post._id}>
                          <Card.Body>{post.subject}</Card.Body>
                        </Accordion.Collapse>
                      </Card>
          )
          
          )):(<h1>Error</h1>)} 

   </Accordion>
        </div>
    )
}

export default Index
