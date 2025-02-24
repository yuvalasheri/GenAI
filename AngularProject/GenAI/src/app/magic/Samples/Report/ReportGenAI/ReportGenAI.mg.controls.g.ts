import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ReportGenAI = "ReportGenAI",
        vQuestion = "vQuestion",
        bGenRes = "bGenRes",
        Answer = "Answer",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get vQuestion(): FormControl {
        return this.fg.controls[MgControlName.vQuestion] as FormControl;
    }

    get Answer(): FormControl {
        return this.fg.controls[MgControlName.Answer] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}