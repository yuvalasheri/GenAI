import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SelectCustomer.mg.controls.g";
import { MgDisplayedColumns } from "./SelectCustomer.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-SelectCustomer_SelectCustomer',
    providers: [...matMagicProviders],
    templateUrl: './SelectCustomer.component.html'
})
export class SelectCustomer extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "SelectCustomer";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "30vw";
    private static readonly height: string = "70vh";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = false;
    X() {
        return SelectCustomer.x;
    }
    Y() {
        return SelectCustomer.y;
    }
    Width(): string {
        return SelectCustomer.width;
    }
    Height(): string {
        return SelectCustomer.height;
    }
    IsCenteredToWindow() {
        return SelectCustomer.isCenteredToWindow;
    }
    FormName() {
        return SelectCustomer.formName;
    }
    ShowTitleBar() {
        return SelectCustomer.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SelectCustomer.shouldCloseOnBackgroundClick;
    }
    override displayedColumns = this.mgdp;
}