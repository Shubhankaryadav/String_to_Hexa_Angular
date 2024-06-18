import { Component } from '@angular/core';

@Component({
  selector: 'app-hex-converter',
  templateUrl: './hex-converter.component.html',
  styleUrls: ['./hex-converter.component.css']
})
export class HexConverterComponent {
  inputString: string = '';
  hexString: string = '';

  convertToHex(): void {
    this.hexString = this.stringToHex(this.inputString);
  }

  stringToHex(str: string): string {
    return str.split('')
              .map(char => char.charCodeAt(0).toString(16))
              .join('');
  }
}
