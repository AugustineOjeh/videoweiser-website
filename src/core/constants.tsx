export const GridBlockLocations = [
    { row: 2, col: 8, width: 2, height: 1, opacity: 20 as const },
    { row: 2, col: 9, width: 1, height: 1, opacity: 20 as const },
    { row: 5, col: 2, width: 2, height: 1, opacity: 15 as const },
    { row: 6, col: 2, width: 1, height: 1, opacity: 15 as const },
    { row: 1, col: 12, width: 3, height: 1, opacity: 25 as const },
    { row: 7, col: 15, width: 2, height: 2, opacity: 15 as const },
]

export const VideoweiserProjects = {
    MadFit: {
        url: "https://youtube.com/shorts/xFiTDvJxV-M?si=tfqn84jsOfjfpJQD",
        orientation: "protrait",
        aspectRatio: 9 / 16
    },
    GritKoa: {
        url: "https://youtube.com/shorts/Q6_xKMv-ySs?si=dWL8syQUMHXJPLlk",
        orientation: "protrait",
        aspectRatio: 9 / 16
    },
    Siemens: {
        url: "https://youtu.be/jh5U5BnpGN8?si=_HZTS2rf9qk9IYdb",
        orientation: "landscape",
        aspectRatio: 16 / 9
    },
    Coviant: {
        url: "https://youtu.be/_pUBz83-doA?si=A3CdVDOWFLQ_9Zi0",
        orientation: "landscape",
        aspectRatio: 16 / 9
    },
    NextGenOffice: {
        url: "https://youtu.be/R1FJXoT-I0c?si=lgdSdGqjrTH9a9fe",
        orientation: "landscape",
        aspectRatio: 16 / 9
    },
    NextGenAmbientAssist: {
        url: "https://youtube.com/shorts/WDRpdPZemTE?si=mLBSG1MRCBHBcpff",
        orientation: "portrait",
        aspectRatio: 9 / 16
    },
} as const;