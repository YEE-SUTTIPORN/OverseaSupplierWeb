import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-website-create',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './website-create.component.html',
  styleUrl: './website-create.component.css'
})
export class WebsiteCreateComponent {
  uploadForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.uploadForm = this.fb.group({
      name: [''],
      ssoEnabled: [false],
      ssoEndpoint: [''],
      webDescription: ['']
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (!this.selectedFile) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append('name', this.uploadForm.value.name);
    formData.append('ssoEnabled', this.uploadForm.value.ssoEnabled);
    formData.append('ssoEndpoint', this.uploadForm.value.ssoEndpoint);
    formData.append('webDescription', this.uploadForm.value.webDescription);
    formData.append('image', this.selectedFile); // ต้องตรงกับชื่อที่ backend ใช้

    this.http.post('https://localhost:44306/api/website/upload', formData)
      .subscribe({
        next: (res) => console.log('Upload success', res),
        error: (err) => console.error('Upload error', err)
      });
  }
}
