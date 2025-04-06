import {Badge, Figure} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import {IRootState} from '@/app/ReduxStoreConfig';
import React from 'react';

const AboutPage: React.FC = () => {
    const postsCount = useSelector<IRootState, number | undefined>(state => state.posts.value);

    return (
        <Figure>
            <Figure.Caption>
                <h4><Badge bg='secondary'>Number of increments:</Badge> <Badge>{postsCount}</Badge></h4>
            </Figure.Caption>
        </Figure>
    );
}

export default AboutPage;