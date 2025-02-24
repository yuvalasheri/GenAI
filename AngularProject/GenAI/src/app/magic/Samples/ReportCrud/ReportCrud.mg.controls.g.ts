import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ReportCrud = "ReportCrud",
        vDate = "vDate",
        vDetails = "vDetails",
        bSave = "bSave",
        bCancel = "bCancel",
}
export enum MgCustomProperties {
    ReportCrud_WindowTitle = 'ReportCrud~WindowTitle',
}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get vDate(): FormControl {
        return this.fg.controls[MgControlName.vDate] as FormControl;
    }

    get vDetails(): FormControl {
        return this.fg.controls[MgControlName.vDetails] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}