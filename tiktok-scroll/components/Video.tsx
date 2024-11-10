import React from "react"

interface VideoProps {
    url: string
}

const Video: React.FC<VideoProps> = ({ url }: { url: string }) => {
    return (
        <div className="w-full h-full overflow-hidden relative">
            <video
                src={url}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
            />
        </div>
    )
}

export default Video
