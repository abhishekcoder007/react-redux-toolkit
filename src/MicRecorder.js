import React, { useState } from 'react';
import { ReactMic } from 'react-mic';

const MicRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState(null);

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const onStop = (blob) => {
    console.log('Recorded Blob: ', blob);
    setRecordedBlob(blob);
  };

  return (
    <div>
      <h1>React Mic Recorder</h1>
      <ReactMic
        record={isRecording}
        onStop={onStop}
        strokeColor="#000000"
        backgroundColor="#FF4081"
      />
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>

      {recordedBlob && (
        <audio controls>
          <source src={recordedBlob.blobURL} type="audio/wav" />
        </audio>
      )}
    </div>
  );
};

export default MicRecorder;
