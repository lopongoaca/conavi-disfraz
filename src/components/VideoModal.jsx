import ReactPlayerModal from '@octa-labs/react-player-modal';
import { useState } from "react";
import { PlayButton } from "./PlayButton";

export const VideoModal = ({ id, start }) => {
    const [isOpen, setOpen] = useState(false)
    const customStyles = {
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '20px',
        borderRadius: '10px',
        xColor: 'black'
    };

    return (
        <>
            <ReactPlayerModal
                url={`https://www.youtube.com/watch?v=${id}`}
                modalStyle={customStyles}
                buttonClassName="button button--secondary button--outline button--golden button--lg"
                buttonText={<PlayButton />}
            />
        </>

    );
}