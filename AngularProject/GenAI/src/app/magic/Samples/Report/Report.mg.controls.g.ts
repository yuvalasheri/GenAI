import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    Report = "Report",
        vSearch = "vSearch",
        sGenAI = "sGenAI",
        vReportDateFrom = "vReportDateFrom",
        vReportDateTo = "vReportDateTo",
        bAdd = "bAdd",
        Table4 = "Table4",
        Column5 = "Column5",
        DailyReportDate = "DailyReportDate",
        Column7 = "Column7",
        Detail = "Detail",
        Column9 = "Column9",
        bEdit = "bEdit",
        StandaloneDetail = "StandaloneDetail",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column5',
        'Column7',
        'Column9',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get vSearch(): FormControl {
        return this.fg.controls[MgControlName.vSearch] as FormControl;
    }

    get vReportDateFrom(): FormControl {
        return this.fg.controls[MgControlName.vReportDateFrom] as FormControl;
    }

    get vReportDateTo(): FormControl {
        return this.fg.controls[MgControlName.vReportDateTo] as FormControl;
    }

    get DailyReportDate(): FormControl {
        return this.getTableChildFormControl(MgControlName.DailyReportDate);
    }

    get Detail(): FormControl {
        return this.getTableChildFormControl(MgControlName.Detail);
    }

    get StandaloneDetail(): FormControl {
        return this.fg.controls[MgControlName.StandaloneDetail] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}