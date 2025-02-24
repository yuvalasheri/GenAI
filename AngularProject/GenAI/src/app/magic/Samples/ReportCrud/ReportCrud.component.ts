import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ReportCrud.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-ReportCrud_ReportCrud',
    providers: [...magicProviders],
    templateUrl: './ReportCrud.component.html'
})
export class ReportCrud extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "ReportCrud";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "50vw";
    private static readonly height: string = "78vh";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = false;
    X() {
        return ReportCrud.x;
    }
    Y() {
        return ReportCrud.y;
    }
    Width(): string {
        return ReportCrud.width;
    }
    Height(): string {
        return ReportCrud.height;
    }
    IsCenteredToWindow() {
        return ReportCrud.isCenteredToWindow;
    }
    FormName() {
        return ReportCrud.formName;
    }
    ShowTitleBar() {
        return ReportCrud.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ReportCrud.shouldCloseOnBackgroundClick;
    }
}