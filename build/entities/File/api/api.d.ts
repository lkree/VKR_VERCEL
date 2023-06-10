import type { UploadedFile } from 'express-fileupload';
declare class FileService {
    upload(file: UploadedFile): Promise<boolean>;
    deleteExisting(): Promise<unknown>;
    acceptFile({ notify }?: {
        notify: boolean;
    }): Promise<unknown>;
    getFileInfo(): Promise<{
        uploadDate: number;
        lastUpdatedDate: number | undefined;
    } | null>;
}
export declare const fileService: FileService;
export {};
