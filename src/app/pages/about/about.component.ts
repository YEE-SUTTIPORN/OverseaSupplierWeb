import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

interface Website {
  id: number;
  name: string;
  image: string;
  selected: boolean;
}


@Component({
  selector: 'app-about',
  imports: [NgFor, NgIf, CommonModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  showModal = false;
  websites: Website[] = [];

  constructor() {
    this.loadWebsites();
  }

  loadWebsites() {
    const saved = localStorage.getItem('selectedWebsites');
    const defaultList: Website[] = [
      { id: 1, name: 'Google', image: 'https://www.google.com/favicon.ico', selected: false },
      { id: 2, name: 'YouTube', image: 'https://www.youtube.com/favicon.ico', selected: false },
      { id: 3, name: 'Facebook', image: 'https://www.facebook.com/favicon.ico', selected: false },
      { id: 4, name: 'prydwen', image: 'https://www.prydwen.gg/favicon.ico', selected: false },
    ];

    if (saved) {
      const savedIds = JSON.parse(saved);
      this.websites = defaultList.map(site => ({
        ...site,
        selected: savedIds.includes(site.id),
      }));
    } else {
      this.websites = defaultList;
    }
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  saveSelection() {
    const selectedIds = this.websites.filter(w => w.selected);
    // const selectedIds = this.websites.filter(w => w.selected).map(w => w.id);
    localStorage.setItem('selectedWebsites', JSON.stringify(selectedIds));
    this.showModal = false;
    console.log(selectedIds)
  }

}
