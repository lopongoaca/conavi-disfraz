
export const PlayButton = () => {
    return (
        <div class="containerPlay absolute">
            <a class="button is-play" href="javascript:void(0)">
                <div class="button-outer-circle has-scale-animation"></div>
                <div class="button-outer-circle has-scale-animation has-delay-short">
                </div>
                <div class="button-icon is-play">
                    <svg height="100%" width="100%" fill="#000">
                        <polygon
                            class="triangle"
                            points="5,0 30,15 5,30"
                            viewBox="0 0 30 15"></polygon>
                        <path
                            class="path"
                            d="M5,0 L30,15 L5,30z"
                            fill="none"
                            stroke="#000"
                            stroke-width="1"></path>
                    </svg>
                </div>
            </a>
        </div>
    )
}