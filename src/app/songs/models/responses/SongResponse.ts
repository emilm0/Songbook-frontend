import { Line } from "../Line";

export interface SongResponse {
    id: string;
    signature: string;
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
    createTime: Date;
    urlPl: string;
    urlOrigin: string;
    urlDrive: string;
    urlNotes: string;
    editId: string;
    isReadyToUse: boolean;
    isInUse: boolean;
    lastUsed: Date;
    counterOfUse: number;
    lines: Array<Line>;
}