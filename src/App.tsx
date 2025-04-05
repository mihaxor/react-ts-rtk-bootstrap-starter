import {Button, Col, Container, Row, Stack} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router';
import MenuComp from '@/common/components/MenuComp';
import {MoonStarsFill, SunFill} from 'react-bootstrap-icons';

const App: React.FC = () => {
    const [theme, setTheme] = useState<string>('dark');

    useEffect(() => {
        document.body.style.backgroundColor = theme === 'light' ? '#fff' : '#212529';
    });

    const reverseTheme = (theme: string) => theme === 'dark' ? 'light' : 'dark'

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Stack direction={'horizontal'} gap={2}>
                        <Button variant={reverseTheme(theme)} onClick={() => setTheme(reverseTheme(theme))}>
                            {theme === 'dark' ?
                                <SunFill color='black' size={14.5} /> :
                                <MoonStarsFill color='white' size={14.5} />
                            }
                        </Button>
                    </Stack>
                </Col>
                <MenuComp theme={theme} />
            </Row>
            <br />
            <Outlet context={theme} />
        </Container>
    )
};

export default App
