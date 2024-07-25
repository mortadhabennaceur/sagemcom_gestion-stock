import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.component.html',
  styleUrls: ['./qr-scanner.component.scss']
})
export class QrScannerComponent implements OnInit {
  public allowedFormats = [BarcodeFormat.QR_CODE];
  public scannerEnabled = true;
  public result: string | null = null;
  public selectedDevice: MediaDeviceInfo | undefined;

  ngOnInit() {
    // Initialize selectedDevice if needed
    this.selectedDevice = undefined; // or set it to a specific MediaDeviceInfo if available
  }

  onCodeResult(resultString: string) {
    this.result = resultString;
    console.log('Scanned QR Code:', this.result);
    // Optionally send result to the backend for further processing
  }
}
