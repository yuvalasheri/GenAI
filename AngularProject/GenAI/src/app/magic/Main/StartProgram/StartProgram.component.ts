import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./StartProgram.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-StartProgram',
    providers: [...magicProviders],
    styleUrls: ['./StartProgram.component.css'],
    templateUrl: './StartProgram.component.html',
})
export class StartProgram extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }

    LastObj!: any;

    HighLightMenu(obj: any): void {
        const navbarItemBox = obj.currentTarget.closest('.navbar-itembox') as HTMLElement;
        if (!navbarItemBox) return;

        const sideNav = document.getElementById('side-nav');

        if (this.LastObj === navbarItemBox) {
            navbarItemBox.classList.toggle('navbar-item-selected');
            sideNav?.classList.toggle('side-nav-state');
        } else {
            if (this.LastObj) {
                this.LastObj.classList.remove('navbar-item-selected');
            }
            navbarItemBox.classList.add('navbar-item-selected');
            sideNav?.classList.remove('side-nav-state');
            this.LastObj = navbarItemBox;
        }
    }

    SetValue() {
        const passwordInput = document.getElementById('password') as HTMLInputElement;
        this.mg.setValueToControl('vPassword', passwordInput.value)
    }

    closeMenu(): void {
        const sideNav = document.getElementById('side-nav');
        sideNav?.classList.toggle('side-nav-state');
    }
}