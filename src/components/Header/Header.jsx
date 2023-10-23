import React from 'react';

const Header = () => {

    const tg = window.Telegram.WebApp;

    const onClose = () => {
        th.Close()
    }
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {th.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;