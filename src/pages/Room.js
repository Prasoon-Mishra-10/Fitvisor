import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

export default function Room() {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appID = 413206128;
        const serverSecret = "79b4e1536065f94f220c6f6e676592c9";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "sujal");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: "Copy Link",
                    url: `http://localhost:3000/demo/room/${roomId}`
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: false,
            showLeavingView: true,

        })
    }

    return (
        <div ref={myMeeting}>

        </div>
    )
}
