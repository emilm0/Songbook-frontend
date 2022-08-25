import { LineRequest } from "./LineRequest";

export interface CreateSongRequest {
    title: string;
    titleOrigin: string;
    key: string;
    keyOrigin: string;
    tempo: number;
    author: string;
    translator: string;
    copyright: string;
    basedOn: string;
    group: string;
    type: string;
    urlPl: string;
    urlOrigin: string;
    urlDrive: string;
    urlNotes: string;
    editId: string;
    isReadyToUse: boolean;
    lineList: Array<LineRequest>
}