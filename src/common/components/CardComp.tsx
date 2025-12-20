import {Badge, Button, Card, Stack} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import {useOutletContext} from 'react-router';
import {useDispatch} from 'react-redux';
import {PostType, updatePostsPayload} from '@/common/store';
import {usePosts} from '@/common/hooks';

const CardComp: React.FC<PostType> = props => {

    const dispatch = useDispatch();
    const [count, setCount] = useState<number>(0);
    const theme = useOutletContext<string>();
    const {updatePost} = usePosts();
    const {userId, title, body} = props;

    useEffect(() => {
        dispatch(updatePostsPayload(count));
    }, [count]);

    const truncateWords = (str: string, maxWords: number): string => {
        const words = str.trim().split(/\s+/);
        if (words.length <= maxWords) return str;

        return words.slice(0, maxWords).join(' ') + '...';
    }

    return (
        <Card style={{width: '20rem'}} data-bs-theme={theme}>
            <Card.Body>
                <Card.Title>{truncateWords(title, 3)}</Card.Title>
                <Stack gap={3}>
                    <Button variant='primary' size='sm' onClick={() => setCount(count => count + 1)}>Increment</Button>
                    <Button variant='warning' size='sm' onClick={() => setCount(count => count - 1)}>Decrement</Button>
                    <Button variant='danger' size='sm' onClick={() => setCount(0)}>Reset</Button>
                    <Button variant='secondary' size='sm' onClick={() => updatePost(userId)}>Update </Button>
                </Stack>
                <br />
                <Card.Text>
                    {truncateWords(body, 10)}
                </Card.Text>
                <Badge>Go somewhere count is {count}</Badge>
            </Card.Body>
        </Card>
    );
}

export default CardComp;