const tg = window.Telegram.WebApp;

export function useTelegram() {

    const onClose = () => {
        this.close()
    }

    const onToggleButton = () => {
        if (this.MainButton.isVisible) {
            tg.MainButton.hide();
        }
        else {
            this.MainButton.show();
        }
    }

    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
    }
}