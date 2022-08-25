export interface Line {
    id: string;
    songId: string;
    text: string;
    textOrigin?: string;
    chords?: string;
    chordsOrigin?: string;
    songPartId: string;
    songPartNumber: number;
    linePosition: number;
}