import { EditLineRequest } from "./EditLineRequest";
import { LineRequest } from "./LineRequest";

export interface EditSongRequest {
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
    editionComment: string;
    newLines: Array<LineRequest>;
    updatedLines: Array<EditLineRequest>;
}