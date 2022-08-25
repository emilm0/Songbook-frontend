export interface LineRequest {
    text: string;
    textOrigin?: string;
    chords?: string;
    chordsOrigin?: string;
    songPartId: string;
    songPartNumber: number;
    linePosition: number;
}