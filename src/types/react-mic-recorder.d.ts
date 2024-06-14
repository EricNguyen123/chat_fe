declare module 'react-mic-recorder' {
    import * as React from 'react';

    export interface ReactMicRecorderProps {
        record: boolean;
        className?: string;
        onStop: (recordedData: ReactMicRecorderStopEvent) => void;
        mimeType?: string;
        strokeColor?: string;
        backgroundColor?: string;
    }

    export interface ReactMicRecorderStopEvent {
        blob: Blob;
        startTime: number;
        stopTime: number;
        options: any;
        blobURL: string;
    }

    export class ReactMic extends React.Component<ReactMicProps> {}
}
