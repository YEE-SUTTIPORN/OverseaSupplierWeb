import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WebListModel } from '../models/web-list.model';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-web-list',
  standalone: true, // Mark as standalone component
  imports: [RouterLink, NgFor, NgIf, FormsModule],
  templateUrl: './web-list.component.html',
  styleUrl: './web-list.component.css'
})

export class WebListComponent implements OnInit {
  webListData: WebListModel[] = [];
  groupedWebData: { [key: string]: WebListModel[] } = {}; // This allows using 'string' as a key
  isLoading: boolean = true;
  filteredWebData: WebListModel[] = []; // This will hold filtered data
  searchQuery: string = ''; // This will store the search input

  ngOnInit(): void {
    setTimeout(() => {
      this.webListData = [
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 1',
          Web_Group: 'Technology',
          Web_Url: 'https://www.example1.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 2',
          Web_Group: 'Social Media',
          Web_Url: 'https://picsum.photos/200'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 3',
          Web_Group: 'E-commerce',
          Web_Url: 'https://www.example3.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'News',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'News',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'News',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'News',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'News',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'News',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'Technology',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'News',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'Technology',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'News',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'News',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'News',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'News',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'News',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'Technology',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'E-commerce',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'News',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'News',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'News',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'Technology',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'E-commerce',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'News',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'News',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'News',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'News',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'News',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'Social Media',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'Social Media',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'News',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'E-commerce',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'E-commerce',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'News',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'Social Media',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'E-commerce',
          Web_Url: 'https://www.example4.com'
        },
        {
          Web_Image: 'https://picsum.photos/200',
          Web_Name: 'Example Website 4',
          Web_Group: 'Social Media',
          Web_Url: 'https://www.example4.com'
        }
      ];

      // Initialize filtered data with the full list of websites
      this.filteredWebData = this.webListData;

      // Group data by Web_Group
      this.groupedWebData = this.webListData.reduce((acc, web) => {
        if (!acc[web.Web_Group]) {
          acc[web.Web_Group] = [];
        }
        acc[web.Web_Group].push(web);
        return acc;
      }, {} as { [key: string]: WebListModel[] });

      this.isLoading = false;
    }, 2000);
  }

  // Helper method to extract the keys of the groupedWebData object
  objectKeys(obj: { [key: string]: any }) {
    return Object.keys(obj);
  }

  // Filter data based on the search query
  filterData(): void {
    if (this.searchQuery.trim() === '') {
      this.filteredWebData = this.webListData;
    } else {
      console.log(this.searchQuery)

      this.filteredWebData = this.webListData.filter((web) =>
        web.Web_Name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        web.Web_Group.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    // Re-group the filtered data
    this.groupedWebData = this.filteredWebData.reduce((acc, web) => {
      if (!acc[web.Web_Group]) {
        acc[web.Web_Group] = [];
      }
      acc[web.Web_Group].push(web);
      return acc;
    }, {} as { [key: string]: WebListModel[] });
  }

}
