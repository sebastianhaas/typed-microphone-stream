declare class MicrophoneStream {
  constructor (mediaStream: MediaStream, options: {objectMode: boolean, bufferSize: number});
  public on (type: string, callback: (chunk: any) => void): void;
}

export = MicrophoneStream;
