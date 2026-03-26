import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-personal-subscription',
  imports: [
    MatProgressBarModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  templateUrl: './personal-subscription.component.html',
  styleUrl: './personal-subscription.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalSubscriptionComponent {
  plans = [
    {
      title: 'Class drop-in',
      price: 39,
      classes: ['Free riding', 'Unlimited equipments'],
    },
    {
      title: '12 Month unlimited',
      price: 99.0,
      classes: [
        'Free riding',
        'Unlimited equipments',
        'Personal trainer',
        'Weight losing classes',
      ],
    },
    {
      title: '6 Month unlimited',
      price: 59.0,
      classes: [
        'Free riding',
        'Unlimited equipments',
        'Personal trainer',
        'Weight losing classes',
        'Month to mouth',
        'No time restriction',
      ],
    },
  ];

  testdataSource = [
    {
      Type: 'Premium Subscription',
      Amount: '20$',
      Method: 'Credit card',
      Status: 'success',
      Date: '26/03/2026',
    },
    {
      Type: 'Basic Subscription',
      Amount: '10$',
      Method: 'Credit card',
      Status: 'pending',
      Date: '16/03/2026',
    },
    {
      Type: 'Med Subscription',
      Amount: '15$',
      Method: 'Cash',
      Status: 'failed',
      Date: '26/02/2026',
    },
    {
      Type: 'Book PT',
      Amount: '50$',
      Method: 'Credit card',
      Status: 'success',
      Date: '26/09/2025',
    },
    {
      Type: 'Premium Subscription',
      Amount: '20$',
      Method: 'Credit card',
      Status: 'success',
      Date: '26/08/2025',
    },
    {
      Type: 'Premium Subscription',
      Amount: '20$',
      Method: 'Credit card',
      Status: 'success',
      Date: '26/07/2025',
    },
    {
      Type: 'Book PT',
      Amount: '60$',
      Method: 'Credit card',
      Status: 'success',
      Date: '26/06/2025',
    },
    {
      Type: 'Premium Subscription',
      Amount: '20$',
      Method: 'Credit card',
      Status: 'success',
      Date: '26/05/2025',
    },
    {
      Type: 'Premium Subscription',
      Amount: '20$',
      Method: 'Credit card',
      Status: 'success',
      Date: '26/03/2026',
    },
    {
      Type: 'Premium Subscription',
      Amount: '20$',
      Method: 'Credit card',
      Status: 'success',
      Date: '26/03/2026',
    },
    {
      Type: 'Premium Subscription',
      Amount: '20$',
      Method: 'Credit card',
      Status: 'success',
      Date: '26/03/2026',
    },
  ];

  tableColumn = ['Type', 'Amount', 'Method', 'Status', 'Date'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.testdataSource);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
