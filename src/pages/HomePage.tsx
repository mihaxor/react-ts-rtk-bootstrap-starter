import {Col, Row} from 'react-bootstrap';
import React from 'react';
import CardComp from '@/common/components/CardComp';
import {usePosts} from '@/common/hooks/usePosts';

const HomePage: React.FC = () => {

    const {posts} = usePosts();

    // useEffect(() => {
    // }, [posts]);

    return (
        <Row className='gy-5'>
            {posts?.map((post) => (
                <Col key={post.id}>
                    <CardComp id={post.id} body={post.body} title={post.title} userId={post.id} />
                </Col>
            ))}
        </Row>
    );


}

export default HomePage;

