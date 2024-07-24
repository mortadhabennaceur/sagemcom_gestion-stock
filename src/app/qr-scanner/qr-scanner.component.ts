import { Component } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss']
})
export class QrScannerComponent {
  public allowedFormats = [BarcodeFormat.QR_CODE];
  public scannerEnabled = true;
  public result: string | null = null;

  onCodeResult(resultString: string) {
    this.result = resultString;
    console.log('Scanned QR Code:', this.result);
    // Optionally send result to the backend for further processing
  }
}
