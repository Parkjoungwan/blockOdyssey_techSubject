import React from 'react';
import { useNavigate } from 'react-router';

const Index = () => {
    const navi = useNavigate();
    const onAdmin = () => {
        navi("/admin");
    }
    return (
        <div>
            <div>시작페이지</div>
            <div>
                <button onClick={onAdmin}>어드민 페이지로</button>
            </div>
        </div>
    );
}

export default Index;