import { Injectable } from '@angular/core';
import  *  as CryptoJS from  'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class StorageInfoService {

  constructor() { }

  public setInfo(data : any) {
    this.setKeyToken(data.token);

    localStorage.setItem('nombres', this.encrypt(data.nombres));
    localStorage.setItem('apellidos', this.encrypt(data.apellidos));
    localStorage.setItem('rol', this.encrypt(data.rol));
    localStorage.setItem('turno', this.encrypt(data.turno));
  }

  public getNombres() : any {
    return this.decrypt(localStorage.getItem('nombres')+"");
  }
  public getApellidos() : any {
    return this.decrypt(localStorage.getItem('apellidos')+"");
  }
  public getRol() : any {
    return this.decrypt(localStorage.getItem('rol')+"");
  }
  public getTurno() : any {
    return this.decrypt(localStorage.getItem('turno')+"");
  }

  private setKeyToken(token : string) {
    localStorage.setItem('token', token);
  }

  private getKeyToken() : string {
    return localStorage.getItem('token')+"";
  }

  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.getKeyToken()).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.getKeyToken()).toString(CryptoJS.enc.Utf8);
  }
}
