import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { SortUsersPipe } from './pipe/sort-users.pipe';

@NgModule({
  declarations: [TableUsersComponent, SortUsersPipe],
  imports: [CommonModule],
  exports: [TableUsersComponent],
})
export class SharedModule {}
