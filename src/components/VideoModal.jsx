import ModalVideo from 'react-modal-video';
import { useState } from "react"
import { PlayButton } from "./PlayButton.jsx"

export const VideoModal = ({ id, start }) => {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <ModalVideo
                channel="youtube"
                youtube={{
                    cc_load_policy: 1,
                    start: start
                }}
                isOpen={isOpen}
                videoId={id}
                onClose={() => setOpen(false)}
            />
            <button className="btn-primary relative flex justify-center" onClick={() => setOpen(true)}>
                <PlayButton />
                <img src='/video-btn.png' alt='play video' className='border border-black rounded-xl shadow-lg lg:max-w-[80%] w-[90%]' />
            </button>
        </>
    );
}