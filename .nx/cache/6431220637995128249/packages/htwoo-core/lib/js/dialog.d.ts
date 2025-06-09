export class HOODialog {
    /** Options for modal dialog */
    static options: {
        closer: any;
        backdropCloser: boolean;
        escCloser: boolean;
    };
    /**
     * Enum of available dialog types
     */
    static dialogType: {
        DIALOG: string;
        MODAL: string;
    };
    constructor(launcher: any, dialog: any, dialogType?: string, options?: {
        closer: any;
        backdropCloser: boolean;
        escCloser: boolean;
    });
    #private;
}
//# sourceMappingURL=dialog.d.ts.map