import {Directive, ElementRef, Input, Output, HostListener } from "@angular/core";
import {EventEmitter} from "@angular/core";
import {OnChanges} from "@angular/core";

@Directive({
	selector: '[ceModel]'
})
export class ContenteditableModel implements OnChanges {

	@Input('ceModel') model: any;
	@Output('ceUpdate') update = new EventEmitter();

	private lastViewModel: any;

	constructor(private elRef: ElementRef) {
	}

	ngOnChanges() {
        this.lastViewModel = this.model;
        this.refreshView();
	}

	@HostListener('blur') onBlur() {
		var value = this.elRef.nativeElement.innerText;
		this.lastViewModel = value;
		this.update.emit(value);
	}

	private refreshView() {
		this.elRef.nativeElement.innerText = this.model;
	}
}
