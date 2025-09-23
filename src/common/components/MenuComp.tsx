import React from 'react';
import {useNavigate} from 'react-router';
import {Button, Col, Stack} from 'react-bootstrap';

interface MenuComponentProps {
    theme: string
}

const MenuComp: React.FC<MenuComponentProps> = props => {
    const navigate = useNavigate(),
        theme = props.theme;

    const isDarkMode = () => {
        return theme === 'dark' ? 'light' : 'dark';
    }

    return (
        <Col xs lg='3'>
            <Stack direction={'horizontal'} gap={2}>
                <Button variant={isDarkMode()} onClick={() => navigate('/home')}>Home</Button>
                <Button variant={isDarkMode()} onClick={() => navigate('/about')}>About</Button>
                <Button variant={isDarkMode()} onClick={() => navigate('/contact')}>Contact</Button>
            </Stack>
        </Col>
    );
};

export default MenuComp;